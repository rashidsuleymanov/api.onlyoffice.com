<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsBool</span>
</h1>

<h4 class="header-gray" id="IsBool">def IsBool(self);</h4>
<p class="dscr">Returns true if the <b>CDocBuilderValue</b> object is a boolean value.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.IsBool</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bBool = globalObj.IsBool()
</pre>
