`static void FreeMemoryTypedArray(sData, nSize);`

Frees the memory for a typed array.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.FreeMemoryTypedArray* method is not used.

## Parameters

| Name    | Type            | Description                          |
| ------- | --------------- | ------------------------------------ |
| *sData* | unsigned char\* | The allocated memory to be released. |
| *nSize* | const size\_t\* | The buffer array size.               |

## Example

**C++**

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CVlaue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, true);
oContext.FreeMemoryTypedArray(sBuffer, 3);
CDocBuilder::Dispose();
```
