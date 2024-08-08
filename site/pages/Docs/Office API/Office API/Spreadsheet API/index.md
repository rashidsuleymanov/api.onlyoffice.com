---
order: -2
---

A spreadsheet document has a more simple structure than that of a text document, most of the spreadsheet elements are nested within the *worksheet* element with all the other elements placed on it.

The *cells* can be given various values, some of the cell text properties can also be changed.

The *range* element can contain *areas* and *comments*.

Some drawn objects - *images*, *shapes*, *charts* - can be placed directly to the *worksheet*.

The text that does not pertain to the cell values, can be grouped to *paragraphs* and added to the *shapes*. For the sake of convenience (as it is always easier to work with smaller blocks than with larger ones) the text is usually divided into small text portions called *runs*. Each paragraph can consist either of only one text run or have dozens of them inside, depending on the paragraph complexity.


## Creating a new spreadsheet

The simplest example spreadsheet with a sheet named 'sheet 1' and the first column 140 pixels wide and A1 cell set to 'New cell' value can be built with the help of **ONLYOFFICE Document Builder** using the following code:

``` js
builder.CreateFile("xlsx");                      // create a spreadsheet file in the .xlsx format with ONLYOFFICE Document Builder
var oWorksheet = Api.GetActiveSheet();           // create a new 'oWorksheet' variable and get the created spreadsheet contents
oWorksheet.SetName("sheet 1");                   // set the 'sheet 1' name for the current active sheet
oWorksheet.SetColumnWidth(0, 20);                // set the width of the first column to 140 pixels
oWorksheet.GetRange("A1").SetValue("New cell");  // set the 'New cell' value to the A1 spreadsheet cell
builder.SaveFile("xlsx", "example.xlsx");        // save the resulting spreadsheet as a file in the .xlsx format with a new 'example.xlsx' name
builder.CloseFile();                             // close the spreadsheet file and finish work with ONLYOFFICE Document Builder
```


## Opening an existing spreadsheet

If you want to edit an already existing spreadsheet, you can open it using **ONLYOFFICE Document Builder**, get its elements and change them however you need. The only difference from a spreadsheet editor in this case will be that you will not need this spreadsheet editor. The spreadsheet is opened the following way:

``` js
builder.OpenFile("https://example.com/myspreadsheet.xlsx");          // use a path to an existing 'myspreadsheet.xlsx' spreadsheet file to open it with ONLYOFFICE Document Builder
var oWorksheet = Api.GetActiveSheet();           // create a new 'oWorksheet' variable and get the created spreadsheet contents
oWorksheet.SetName("sheet 1 renamed");           // set the 'sheet 1 renamed' name for the current active sheet
oWorksheet.SetColumnWidth(0, 20);                // set the width of the first column to 140 pixels
oWorksheet.GetRange("A1").SetValue("New cell");  // set the 'New cell' value to the A1 spreadsheet cell
builder.SaveFile("xlsx", "example.xlsx");        // save the resulting spreadsheet as a file in the .xlsx format with a new 'example.xlsx' name
builder.CloseFile();                             // close the spreadsheet file and finish work with ONLYOFFICE Document Builder
```

As you can see you just need to use the *builder.OpenFile();* method of the [CDocBuilder](../../../Document%20Builder/Builder%20Framework/C++/CDocBuilder/index.md) class with the path to the necessary spreadsheet as an argument to open it. In the above example we open **myspreadsheet.xlsx** spreadsheet, get its first sheet and change the sheet name, first column width and enter the new value into its A1 cell. The same way any other spreadsheet element can be changed.

Use the appropriate API documentation sections to find out which methods allow you to change certain document and spreadsheet element formatting properties.
