`HRESULT GetProperty([in] BSTR name, [out, retval] I_DOCBUILDER_VALUE** result);`

Returns a property of the **CDocBuilderValue** object.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.GetProperty* method is not used.

## Parameters

| Name     | Type                     | Description                                           |
| -------- | ------------------------ | ----------------------------------------------------- |
| *name*   | BSTR                     | The name of the **CDocBuilderValue** object property. |
| *result* | I\_DOCBUILDER\_VALUE\*\* | The returned object property.                         |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oBuilder->Dispose();
```
