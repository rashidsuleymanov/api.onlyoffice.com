#### def IsNull(self);

Returns true if the **CDocBuilderValue** object is null.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsNll* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bNull = globalObj.IsNull()
```
