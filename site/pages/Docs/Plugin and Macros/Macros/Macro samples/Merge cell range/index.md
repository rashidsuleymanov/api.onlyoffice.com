---
order: -15
---

## Description

Merges the selected cell range.

``` javascript
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [Merge](/officeapi/spreadsheetapi/apirange/merge)

## Reference Microsoft VBA macro code

``` javascript
Sub example()
    Range("A1:B3").Merge
End Sub
```

## Result

![Merge cells](/assets/images/plugins/merge_cells.png)
