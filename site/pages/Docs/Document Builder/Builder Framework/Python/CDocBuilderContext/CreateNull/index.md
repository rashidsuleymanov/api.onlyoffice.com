#### def CreateNull(self);

Creates a null value, an analogue of *null* in JS.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateNull* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateNull()
```
