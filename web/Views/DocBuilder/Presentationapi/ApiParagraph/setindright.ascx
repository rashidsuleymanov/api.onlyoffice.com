<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">SetIndRight</span>
</h1>
<h4 class="header-gray" id="SetIndRight">SetIndRight(nValue)</h4>

<dl class="details">
        <dt>Inherited From:</dt>
        <dd>
            <ul>
                <li>
                    <a href="<%= Url.Action("presentationapi/apiparapr/setindright") %>">ApiParaPr.SetIndRight</a>
                </li>
            </ul>
        </dd>
    </dl>

<p class="dscr">
Set the paragraph right side indentation.
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
            <td><em>nValue</em></td>
            <td>
                <a href="<%= Url.Action("global") %>#twips">twips</a>
            </td>
            <td>The paragraph right side indentation value measured in twentieths of a point (1/1440 of an inch).</td>
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
oParagraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("We also aligned the text in it by the right side. ");
oParagraph.AddText("This sentence is used to add lines for demonstrative purposes.");
oParagraph.SetJc("right");
oParagraph.SetIndRight(2880);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph without any offset set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetIndRight.pptx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5009956&doc=amJ5ZUZxMk5qUmhITGxNZzVVVmNNVVluT1ZSK0xUQ2JiVWpjdzZhZXZ0dz0_IjUwMDk5NTYi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>