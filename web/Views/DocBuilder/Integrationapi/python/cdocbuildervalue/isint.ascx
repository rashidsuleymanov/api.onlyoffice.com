<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsInt</span>
</h1>

<h4 class="header-gray" id="CloseFile">def IsInt(self);</h4>
<p class="dscr">Returns true if the <b>CDocBuilderValue</b> object is an integer.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.IsInt</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
int = globalObj.IsInt()
</pre>
