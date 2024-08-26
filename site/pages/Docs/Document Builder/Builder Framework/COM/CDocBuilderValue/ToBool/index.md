`HRESULT ToBool([out, retval] VARIANT_BOOL* result);`

Converts the **CDocBuilderValue** object to a boolean value.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToBool* method is not used.

## Parameters

| Name     | Type            | Description                 |
| -------- | --------------- | --------------------------- |
| *result* | VARIANT\_BOOL\* | The returned boolean value. |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToBool(&b);
oBuilder->Dispose();
```
