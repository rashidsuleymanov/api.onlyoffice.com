`void SetPropertyW(sParam, sValue);`

Sets an argument in the Unicode format which can be trasferred to the program outside the [CDocBuilder.ExecuteCommand](../ExecuteCommand/index.md) method, i.e. either as an additional property when running **ONLYOFFICE Document Builder** executable file or as a part of program code, but not included into the document file script.

> Please note, that for the *.docbuilder* file the *CDocBuilder.SetPropertyW* method is not used explicitly. The argument itself is used instead as an additional property for the executable. See the example below.

## Parameters

| Name     | Type             | Description                                                                   |
| -------- | ---------------- | ----------------------------------------------------------------------------- |
| *sParam* | const wchar\_t\* | The parameter name in the Unicode format, the value is always *--argument*.   |
| *sValue* | const wchar\_t\* | The parameter value in the Unicode format which will be used in the document. |

## Supported properties

| Name                        | Type             | Description                                                                                                                | Default |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| *--use-doctrenderer-scheme* | bool             | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. | false   |
| *--check-fonts*             | bool             | Specifies if the system fonts are cached for faster work.                                                                  | true    |
| *--work-directory*          | const wchar\_t\* | The path to the temporary directory.                                                                                       | ""      |
| *--cache-scripts*           | bool             | Specifies if the sdkjs scripts are cached.                                                                                 | true    |
| *--save-use-only-names*     | bool             | Specifies if the destination paths are used (for server work). For example: /home/user/1.txt => /tmp/1.txt                 | false   |
| *--all-fonts-path*          | const wchar\_t\* | The path to the *AllFonts.js* script.                                                                                      | ""      |
| *--argument*                | const wchar\_t\* | The JSON argument which is sent to the global parameters of all the opened JS context.                                     | ""      |
| *--fonts-system*            | bool             | Specifies if the system fonts are used.                                                                                    | true    |
| *--fonts-dir*               | const wchar\_t\* | The path to the additional fonts directory (may be many records).                                                          | ""      |

Once added, the argument will be available as the **Argument** variable with its parameter values set:

```cpp
Argument.name === "ONLYOFFICE" // true
```

## Example

**C++**

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetPropertyW("--argument", L"{\"name\":\"ONLYOFFICE\"}");
CDocBuilder::Dispose();
```

**.docbuilder**

```sh
docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
```

## Adding or removing fonts

It is also possible to update the font list when you either add new fonts or remove old ones. To do this, the **check-fonts** variable is used:

## Example

**C++**

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetPropertyW("--check-fonts", L"true");
CDocBuilder::Dispose();
```

**.docbuilder**

```sh
docbuilder.exe "--check-fonts=true" test.docbuilder
```
