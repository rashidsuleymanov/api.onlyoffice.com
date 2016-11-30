<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetTabs</span>
</h1>

<h4 class="header-gray" id="SetTabs">SetTabs(aPos, aVal)</h4>
<p class="dscr">
Specify a sequence of custom tab stops which will be used for any tab characters in the current paragraph.
</p>
<p><b>Warning</b>: the lengths of <em>aPos</em> array and <em>aVal</em> array <b>MUST BE</b> equal to each other.</p>

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
            <td><em>aPos</em></td>
            <td>
                <em>Array.&lt;<a href="<%= Url.Action("global") %>#twips">twips</a>></em>
            </td>
            <td>An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch).</td>
        </tr>
        <tr class="tablerow">
            <td><em>aVal</em></td>
            <td>
                <em>Array.&lt;<a href="<%= Url.Action("global") %>#TabJc">TabJc</a>></em>
            </td>
            <td>An array of the styles of custom tab stops, which determines the behavior of the tab stop andthe alignment which will be applied to text entered at the current custom tab stop.</td>
        </tr>
    </tbody>
</table>

<h2>Example</h2>
<div class="copy_code">
<span class="button">Copy code</span>
</div>
<pre>builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
oParaPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 1 inch left");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 3 inches center");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 5 inches right");
builder.SaveFile("docx", "SetTabs.docx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4891405&doc=RC9DOFY2dVhmNHlXbUYycm85aUFmSEFkcGpWSXNEUFhGZ1Y0b0diUXFiYz0_IjQ4OTE0MDUi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>