<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">GetVersion</span>
</h1>

<h4 class="header-gray" id="GetVersion">def GetVersion(self);</h4>
<p class="dscr">Returns the <b>ONLYOFFICE Document Builder</b> engine version.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilder.GetVersion</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
version = builder.GetVersion()
</pre>
