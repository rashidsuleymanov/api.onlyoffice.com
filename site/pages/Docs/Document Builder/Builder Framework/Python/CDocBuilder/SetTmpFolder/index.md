`def SetTmpFolder(self, folder);`

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Parameters

| Name     | Type | Description                                                     |
| -------- | ---- | --------------------------------------------------------------- |
| *folder* | str  | The path to the folder where the temporary files will be saved. |

## Example

**Python**

``` py
builder = docbuilder.CDocBuilder()
builder.SetTmpFolder(L"DocBuilderTemp")
```

**.docbuilder**

```js
builder.SetTmpFolder("DocBuilderTemp")
```
