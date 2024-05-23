<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsDouble</span>
</h1>

<h4 class="header-gray" id="CloseFile">def IsDouble(self);</h4>
<p class="dscr">Returns true if the <b>CDocBuilderValue</b> object is a double value.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.IsDouble</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
double = globalObj.IsDouble()
</pre>
