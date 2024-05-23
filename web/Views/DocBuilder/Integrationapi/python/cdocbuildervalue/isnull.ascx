<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsNull</span>
</h1>

<h4 class="header-gray" id="IsNull">def IsNull(self);</h4>
<p class="dscr">Returns true if the <b>CDocBuilderValue</b> object is null.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.IsNll</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bNull = globalObj.IsNull()
</pre>
