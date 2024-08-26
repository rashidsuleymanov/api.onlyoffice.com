`bool IsEmpty();`

Returns true if the **CDocBuilderValue** object is empty.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsEmpty* method is not used.

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bEmpty = oGlobal.IsEmpty();
CDocBuilder.Destroy();
```
