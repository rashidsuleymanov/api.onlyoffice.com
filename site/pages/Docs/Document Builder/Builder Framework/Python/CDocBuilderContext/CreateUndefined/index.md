#### def CreateUndefined(self);

Creates an undefined value, an analogue of *undefined* in JS.

> Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateUndefined* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateUndefined()
```
