`void Clear();`

Clears the **CDocBuilderValue** object.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.Clear* method is not used.

## Example

**.Net**

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.Clear();
CDocBuilder.Destroy();
```
