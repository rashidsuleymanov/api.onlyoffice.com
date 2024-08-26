`static void Initialize(sDirectory=0);`

Initializes the **ONLYOFFICE Document Builder** as a library for the application to be able to work with it. This method just sets the directory to the main Document Builder resources (icu files, etc). If this method is not called, the Document Builder will find resources from the current process directory.

> Please note, that for the *.docbuilder* file the *CDocBuilder.Initialize* method is not used.

## Parameters

| Name         | Type    | Description                                      |
| ------------ | ------- | ------------------------------------------------ |
| *sDirectory* | String^ | The path to the main Document Builder resources. |

## Example

**.Net**

```csharp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```
