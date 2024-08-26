`HRESULT SetProperty([in] BSTR name, [in] I_DOCBUILDER_VALUE* value);`

Sets a property to the **CDocBuilderValue** object.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.SetProperty* method is not used.

## Parameters

| Name    | Type                   | Description                                            |
| ------- | ---------------------- | ------------------------------------------------------ |
| *name*  | BSTR                   | The name of the **CDocBuilderValue** object property.  |
| *value* | I\_DOCBUILDER\_VALUE\* | The value of the **CDocBuilderValue** object property. |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
oBuilder->Dispose();
```
