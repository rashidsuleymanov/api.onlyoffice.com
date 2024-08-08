#### def IsInt(self);

Returns true if the **CDocBuilderValue** object is an integer.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsInt* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bInt = globalObj.IsInt()
```
