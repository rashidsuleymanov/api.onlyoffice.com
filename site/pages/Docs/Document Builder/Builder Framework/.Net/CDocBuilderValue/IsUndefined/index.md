`bool IsUndefined();`

Returns true if the **CDocBuilderValue** object is undefined.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsUndefined* method is not used.

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bUndefined = oGlobal.IsUndefined();
CDocBuilder.Destroy();
```
