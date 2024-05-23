<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsObject</span>
</h1>

<h4 class="header-gray" id="CloseFile">def IsObject(self);</h4>
<p class="dscr">Returns true if the <b>CDocBuilderValue</b> object is an object.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.IsObject</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
object = globalObj.IsObject()
</pre>
