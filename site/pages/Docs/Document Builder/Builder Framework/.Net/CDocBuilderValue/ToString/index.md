`String^ ToString() override;`

Converts the **CDocBuilderValue** object to a string.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToString* method is not used.

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
string sGlobal = oGlobal.ToString();
CDocBuilder.Destroy();
```
