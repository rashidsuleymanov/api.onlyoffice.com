#### def Clear(self);

Clears the **CDocBuilderValue** object.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.Clear* method is not used.

## Example

#### Python

``` python
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
document.Clear()
```
