<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">GetContext</span>
</h1>

<h4 class="header-gray" id="GetContext">def GetContext(self);</h4>
<p class="dscr">Returns the current JS <a href="<%= Url.Action("integrationapi/python/cdocbuildercontext") %>">context</a>.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilder.GetContext</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
</pre>
