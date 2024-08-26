`HRESULT IsArray([out, retval] VARIANT_BOOL* result);`

Returns true if the **CDocBuilderValue** object is an array.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsArray* method is not used.

## Parameters

| Name     | Type            | Description                                                    |
| -------- | --------------- | -------------------------------------------------------------- |
| *result* | VARIANT\_BOOL\* | Specifies whether the **CDocBuilderValue** object is an array. |

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
oGlobal->IsArray(&b);
oBuilder->Dispose();
```
