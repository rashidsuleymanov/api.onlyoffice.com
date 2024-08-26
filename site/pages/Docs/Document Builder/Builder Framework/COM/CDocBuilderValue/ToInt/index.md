`HRESULT ToInt([out, retval] long* result);`

Converts the **CDocBuilderValue** object to an integer.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToInt* method is not used.

## Parameters

| Name     | Type   | Description                 |
| -------- | ------ | --------------------------- |
| *result* | long\* | The returned integer value. |

## Example

**COM**

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
long l;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToInt(&l);
oBuilder->Dispose();
```
