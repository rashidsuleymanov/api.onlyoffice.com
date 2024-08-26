`HRESULT Get([in] long index, [out, retval] I_DOCBUILDER_VALUE** result);`

Returns an array value by its index.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.Get* method is not used.

## Parameters

| Name     | Type                     | Description                   |
| -------- | ------------------------ | ----------------------------- |
| *index*  | long                     | The index of the array value. |
| *result* | I\_DOCBUILDER\_VALUE\*\* | The returned array value.     |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* aCharts = NULL;
IONLYOFFICEDocBuilderValue* oChart = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->Call(_bstr_t("GetAllCharts"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aCharts);
aCharts->Get(1, &oChart);
oBuilder->Dispose();
```

**.docbuilder**

```js
const oDocument = Api.GetDocument()
const aCharts = oDocument.GetAllCharts()
const oChart = aCharts[1]
```
