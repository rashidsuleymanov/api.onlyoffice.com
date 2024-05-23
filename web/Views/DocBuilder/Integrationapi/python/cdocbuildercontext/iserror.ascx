<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">IsError</span>
</h1>

<h4 class="header-gray" id="CloseFile">def IsError(self);</h4>
<p class="dscr">Checks for errors in JS. The error message and call stack will be written to <em>std::cerr</em>.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContext.IsError</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
error = context.IsError()
</pre>
