<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">GetTableCellPr</span>
</h1>

<h4 class="header-gray" id="GetTableCellPr">GetTableCellPr() &rarr; (nullable) {<a href="<%= Url.Action("textdocumentapi/apitablecellpr") %>">ApiTableCellPr</a>}</h4>
<p class="dscr">Get the table cell properties for the current style.</p>

            <h2>Returns:</h2>
            <dl class="param-type">
                <dt>Type
                </dt>
                <dd>
                <a href="<%= Url.Action("textdocumentapi/apitablecellpr") %>">ApiTableCellPr</a>
                </dd>
            </dl>

<h2>Example</h2>
<div class="copy_code">
<span class="button">Copy code</span>
</div>
<pre>builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable, oTableStyle;
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTable = Api.CreateTable(2, 3);
oTable.SetWidth("percent", 100);
oDocument.Push(oTable);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
oTableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 0, 255, 0);
oTableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 0, 0, 255);
oTableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 255, 0); 
builder.SaveFile("docx", "GetTableCellPr.docx");
builder.CloseFile();</pre>

<h2>Resulting document</h2>
<iframe class="docbuilder_resulting_docs" src="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4892922&doc=aG5La2NhUkF5dEY2cnFwd20zbHBCc0xhUmd3REF0MU9XMVBpTGNvOW81Yz0_IjQ4OTI5MjIi0&action=embedded" frameborder="0" scrolling="no" allowtransparency></iframe>