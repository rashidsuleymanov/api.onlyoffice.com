`CDocBuilderValue^ Get(nIndex);`

Returns an array value by its index.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.Get* method is not used.

## Parameters

| Name     | Type | Description                   |
| -------- | ---- | ----------------------------- |
| *nIndex* | int  | The index of the array value. |

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
CValue aCharts = oDocument.Call("GetAllCharts");
CValue oChart = aCharts.Get(1);
CDocBuilder.Destroy();
```

The **default\[]** postfix expression can be also used to get an array value by its index:

```cpp
property CDocBuilderValue^ default[int]
```

## Example

**.Net**

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
CValue aCharts = oDocument.Call("GetAllCharts");
CValue oChart = aCharts[1];
CDocBuilder.Destroy();
```
