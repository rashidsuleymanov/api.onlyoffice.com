#### def IsArray(self);

Returns true if the **CDocBuilderValue** object is an array.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsArray* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bArray = globalObj.IsArray()
```
