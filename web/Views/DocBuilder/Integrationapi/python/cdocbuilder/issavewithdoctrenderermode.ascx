<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsSaveWithDoctrendererMode</span>
</h1>

<h4 class="header-gray" id="CreateFile">def IsSaveWithDoctrendererMode(self);</h4>
<p class="dscr">Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilder.IsSaveWithDoctrendererMode</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
CDocBuilder.Destroy();

builder = docbuilder.CDocBuilder()
builder.CreateFile("docx")
doctrendererMode = builder.IsSaveWithDoctrendererMode()
builder.CloseFile()
</pre>
