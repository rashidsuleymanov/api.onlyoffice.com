`CDocBuilderValue^ CreateArray(nLength);`

Creates an array value, an analogue of *new Array (length)* in JS.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateArray* method is not used.

## Parameters

| Name      | Type | Description       |
| --------- | ---- | ----------------- |
| *nLength* | int  | The array length. |

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oArray = oContext.CreateArray(2);
CDocBuilder.Destroy();
```
