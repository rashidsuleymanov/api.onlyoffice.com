`HRESULT GetGlobal([out, retval] I_DOCBUILDER_VALUE** result);`

Returns the global object for the current context.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.GetGlobal* method is not used.

## Parameters

| Name     | Type                     | Description                 |
| -------- | ------------------------ | --------------------------- |
| *result* | I\_DOCBUILDER\_VALUE\*\* | The returned global object. |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oBuilder->Dispose();
```
