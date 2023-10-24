﻿<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">ExecuteCommand</span>
</h1>

<h4 class="header-gray" id="ExecuteCommand">HRESULT ExecuteCommand([in] BSTR command, [out, retval] VARIANT_BOOL* result);</h4>
    
<p class="dscr">
    Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF).
    See the <a href="<%= Url.Action("textdocumentapi") %>">Text document API</a>, <a href="<%= Url.Action("spreadsheetapi") %>">Spreadsheet API</a>, <a href="<%= Url.Action("presentationapi") %>">Presentation API</a>, or <a href="<%= Url.Action("formapi") %>">Form API</a> sections for more information which commands are available for various document types.
</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilder.ExecuteCommand</em> method is not used explicitly. The command itself is used instead. See the example below.</div>

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
            <td><em>command</em></td>
            <td>BSTR</td>
            <td>The command which will be used to create the document file (in COM, the escape character must be used when the command contains quotation symbols).</td>
        </tr>
        <tr class="tablerow">
            <td><em>result</em></td>
            <td>VARIANT_BOOL*</td>
            <td>Specifies if the operation of executing a command is successful or not.</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<h2>Example</h2>
<h4 class="header-gray" >COM</h4>
<pre>
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderValue* oRun = NULL;
VARIANT_BOOL b;
oBuilder-&gt;Initialize();
oBuilder-&gt;Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
oBuilder-&gt;ExecuteCommand(L"oParagraph.SetSpacingAfter(1000, false);", &b);
oBuilder-&gt;Dispose();
</pre>
<h4 class="header-gray" >.docbuilder</h4>
<pre>
oParagraph.AddText("Hello, world!");
oParagraph.SetSpacingAfter(1000, false);
</pre>
