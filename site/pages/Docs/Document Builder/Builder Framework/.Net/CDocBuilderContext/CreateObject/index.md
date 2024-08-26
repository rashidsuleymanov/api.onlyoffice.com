`CDocBuilderValue^ CreateObject();`

Creates an empty object, an analogue of *{}* in JS.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateObject* method is not used.

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oObject = oContext.CreateObject();
CDocBuilder.Destroy();
```
