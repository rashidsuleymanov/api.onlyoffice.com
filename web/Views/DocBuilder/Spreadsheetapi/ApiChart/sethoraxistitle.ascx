<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetHorAxisTitle</span>
</h1>

<h4 class="header-gray" id="SetHorAxisTitle">SetHorAxisTitle(sTitle, nSize)</h4>
<p class="dscr">
        Specify the horizontal axis chart title.
</p>  
    
<h2>Parameters:</h2>
<table class="table">
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td><em>sTitle</em></td>
            <td>
                <em>string</em>
            </td>
            <td>The title which will be displayed for the horizontal axis of the current chart.</td>
        </tr>
        <tr class="tablerow">
            <td><em>nSize</em></td>
            <td>
                <a href="<%= Url.Action("global") %>#pt">pt</a>
            </td>
            <td>The text size value measured in points.</td>
        </tr>
    </tbody>
</table>

<h2>Example</h2>
<div class="copy_code">
<span class="button">Copy code</span>
</div>
<pre>builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetName("sheet 1");
oWorksheet.GetRange("B1").SetValue("Row 1");
oWorksheet.GetRange("C1").SetValue("Row 2");
oWorksheet.GetRange("D1").SetValue("Row 3");
oWorksheet.GetRange("A2").SetValue("Category 1");
oWorksheet.GetRange("A3").SetValue("Category 2");
oWorksheet.GetRange("A4").SetValue("Category 3");
oWorksheet.GetRange("A5").SetValue("Category 4");
oWorksheet.GetRange("B2").SetValue("4.3");
oWorksheet.GetRange("B3").SetValue("2.5");
oWorksheet.GetRange("B4").SetValue("3.5");
oWorksheet.GetRange("B5").SetValue("4.5");
oWorksheet.GetRange("C2").SetValue("2.4");
oWorksheet.GetRange("C3").SetValue("4.4");
oWorksheet.GetRange("C4").SetValue("1.8");
oWorksheet.GetRange("C5").SetValue("2.8");
oWorksheet.GetRange("D2").SetValue("2");
oWorksheet.GetRange("D3").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("D5").SetValue("5");
var oChart = oWorksheet.AddChart("'sheet 1'!$A$1:$D$5", true, "bar", 2, 100 * 36000, 70 * 36000, 5, 2 * 36000, 1, 3 * 36000);
oChart.SetVerAxisTitle("Vertical Title", 10);
oChart.SetHorAxisTitle("Horizontal Title", 11);
oChart.SetLegendPos("right");
oChart.SetShowDataLabels(false, false, true);
oChart.SetTitle("Main Chart Title", 13);
builder.SaveFile("xlsx", "SetHorAxisTitle.xlsx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4942918&doc=REFPcmdVU1RzTU96Z2Y4ZEtCOGp2bURxS3FTU21NMUN4YWpDK2d3b0Z5TT0_IjQ5NDI5MTgi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>