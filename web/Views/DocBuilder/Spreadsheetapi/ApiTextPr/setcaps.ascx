<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetCaps</span>
</h1>
<h4 class="header-gray" id="SetCaps">SetCaps(isCaps)</h4>
<p class="dscr">
Specify that any lowercase characters in this text run are formatted for display only as their capital letter character equivalents.
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
            <td><em>isCaps</em></td>
            <td>
                <em>boolean</em>
            </td>
            <td>Specifies that the contents of the current run are displayed capitalized.</td>
        </tr>
    </tbody>
</table>

<h2>Example</h2>
<div class="copy_code">
<span class="button">Copy code</span>
</div>
<pre>builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oStroke, oFill;
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetCaps(true);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape set to capital letters using the text properties.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetCaps.xlsx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5006259&doc=RDJpdVVZS2s1NWNXT1BGdEdXeUdTMjZtTUdWc2t1OU52ZTVpMzYrMWFWTT0_IjUwMDYyNTki0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>