<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetDoubleStrikeout</span>
</h1>
<h4 class="header-gray" id="SetDoubleStrikeout">SetDoubleStrikeout(isDoubleStrikeout)</h4>
    <dl class="details">
        <dt>Inherited From:</dt>
        <dd>
            <ul>
                <li>
                    <a href="<%= Url.Action("presentationapi/apitextpr/setdoublestrikeout") %>">ApiTextPr.SetDoubleStrikeout</a>
                </li>
            </ul>
        </dd>
    </dl>

<p class="dscr">
Specify that the contents of this run is displayed with two horizontal lines through each character displayed on the line.
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
            <td><em>isDoubleStrikeout</em></td>
            <td>
                <em>boolean</em>
            </td>
            <td>Specifies that the contents of the current run are displayed double struck through.</td>
        </tr>
    </tbody>
</table>

<h2>Example</h2>
<div class="copy_code">
<span class="button">Copy code</span>
</div>
<pre>builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetDoubleStrikeout(true);
oRun.AddText("This is a text run with the text struck out with two lines.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetDoubleStrikeout.pptx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5011305&doc=bFRZQzJjeTRURlRTSWNTNCtFN0hVaW02N25GSE5zb3ZCZkZjaDhFY0h0VT0_IjUwMTEzMDUi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>