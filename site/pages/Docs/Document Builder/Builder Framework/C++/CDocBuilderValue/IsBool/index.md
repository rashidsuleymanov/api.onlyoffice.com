`bool IsBool();`

Returns true if the **CDocBuilderValue** object is a boolean value.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsBool* method is not used.

## Example

**C++**

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bBool = oGlobal.IsBool();
CDocBuilder::Dispose();
```
