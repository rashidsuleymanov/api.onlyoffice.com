`CDocBuilderValue^ GetGlobal();`

Returns the global object for the current context.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.GetGlobal* method is not used.

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CDocBuilder.Destroy();
```
