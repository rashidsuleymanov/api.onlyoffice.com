<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">Call</span>
</h1>

<h4 class="header-gray" id="CloseFile">def Call(self, name, *args);</h4>
<p class="dscr">Calls the specified Document Builder method.
See the <a href="<%= Url.Action("textdocumentapi") %>">Text document API</a>, <a href="<%= Url.Action("spreadsheetapi") %>">Spreadsheet API</a>, <a href="<%= Url.Action("presentationapi") %>">Presentation API</a> or <a href="<%= Url.Action("formapi") %>">Form API</a> sections for more information which methods are available for various document types.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.Call</em> method is not used explicitly. The method itself is used instead. See the example below.</div>

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
            <td><em>name</em></td>
            <td>str</td>
            <td>The name of the Document Builder method.</td>
        </tr>
        <tr class="tablerow">
            <td><em>*args</em></td>
            <td>CBuilderValue</td>
            <td>The parameters that the Document Builder method takes as argumens.</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
</pre>
<h4 class="header-gray" >.docbuilder</h4>
<pre>
var oDocument = Api.GetDocument();
</pre>
