<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">GetGlobal</span>
</h1>

<h4 class="header-gray" id="CloseFile">def GetGlobal(self);</h4>
<p class="dscr">Returns the global object for the current context.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContext.GetGlobal</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
docbuilder.CDocBuilder.Dispose()
</pre>
