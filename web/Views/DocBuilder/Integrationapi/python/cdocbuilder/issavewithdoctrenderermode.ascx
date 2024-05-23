<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsSaveWithDoctrendererMode</span>
</h1>

<h4 class="header-gray" id="IsSaveWithDoctrendererMode">def IsSaveWithDoctrendererMode(self);</h4>
<p class="dscr">Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilder.IsSaveWithDoctrendererMode</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
doctrendererMode = builder.IsSaveWithDoctrendererMode()
</pre>
