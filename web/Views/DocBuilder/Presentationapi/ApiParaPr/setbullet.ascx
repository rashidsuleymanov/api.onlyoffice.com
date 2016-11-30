<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetBullet</span>
</h1>
<h4 class="header-gray" id="SetBullet">SetBullet(oBullet)</h4>
<p class="dscr">
Set the bullet or numbering to the current paragraph.
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
            <td><em>oBullet</em></td>
            <td>
                <a href="<%= Url.Action("presentationapi/apibullet") %>">ApiBullet</a>
            </td>
            <td>The bullet object created using either the <a href="<%= Url.Action("presentationapi/api/createbullet") %>">Api.CreateBullet</a> or <a href="<%= Url.Action("presentationapi/api/createnumbering") %>">Api.CreateNumbering</a> method.</td>
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
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(0, 0, 255), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(61, 74, 107), 100000);
oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParaPr = oParagraph.GetParaPr();
oBullet = Api.CreateBullet("-");
oParaPr.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetBullet.pptx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5009993&doc=ZDQvQXpYak5zNGtFNnRnTUZhWGcxMysrVXhFanpCa1J4T3kyemxTdEhvMD0_IjUwMDk5OTMi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>