<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">ToBool</span>
</h1>

<h4 class="header-gray" id="CloseFile">def ToBool(self);</h4>
<p class="dscr">Converts the <b>CDocBuilderValue</b> object to a boolean value.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.ToBool</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bGlobal = globalObj.ToBool()
</pre>
