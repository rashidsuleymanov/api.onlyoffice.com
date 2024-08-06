---
order: -13
---

## Description

Sets the width for the column **B**.

``` javascript
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

Methods used: GetActiveSheet, SetColumnWidth

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## Result

![Column width](/assets/images/plugins/column_width.png)
