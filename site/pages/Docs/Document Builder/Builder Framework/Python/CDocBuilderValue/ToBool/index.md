#### def ToBool(self);

Converts the **CDocBuilderValue** object to a boolean value.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToBool* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bGlobal = globalObj.ToBool()
```
