`HRESULT CreateObject([out, retval] I_DOCBUILDER_VALUE** result);`

Creates an empty object, an analogue of *{}* in JS.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateObject* method is not used.

## Parameters

| Name     | Type                     | Description                |
| -------- | ------------------------ | -------------------------- |
| *result* | I\_DOCBUILDER\_VALUE\*\* | The returned empty object. |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateObject(&oContent);
oBuilder->Dispose();
```
