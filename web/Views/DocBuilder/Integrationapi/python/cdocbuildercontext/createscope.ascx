<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">CreateScope</span>
</h1>

<h4 class="header-gray" id="CreateScope">def CreateScope(self);</h4>
<p class="dscr">Creates a <a href="<%= Url.Action("integrationapi/python/cdocbuildercontextscope") %>">context scope</a> which sets the execution context for all operations executed within a local scope.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContext.CreateScope</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
scope = context.CreateScope()
</pre>
