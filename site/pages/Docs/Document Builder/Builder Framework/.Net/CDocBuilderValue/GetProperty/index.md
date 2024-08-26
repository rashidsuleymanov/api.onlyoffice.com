`CDocBuilderValue^ GetProperty(sName);`

Returns a property of the **CDocBuilderValue** object.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.GetProperty* method is not used.

## Parameters

| Name    | Type    | Description                                           |
| ------- | ------- | ----------------------------------------------------- |
| *sName* | String^ | The name of the **CDocBuilderValue** object property. |

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
CValue oDocPr = oDocument.GetProperty("color");
CDocBuilder.Destroy();
```

There are two more ways to get a property of the **CDocBuilderValue** object:

1. use the **Get** method that takes an argument in the string format:

   ```cpp
   CDocBuilderValue^ Get(String^ name);
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
   CValue oDocPr = oDocument.Get("color");
   CDocBuilder.Destroy();
   ```

2. use the **default\[]** postfix expression that takes an argument in the string format:

   ```cpp
   property CDocBuilderValue^ default[String^]
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
   CValue oDocPr = oDocument["color"];
   CDocBuilder.Destroy();
   ```
