<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">CreateUndefined</span>
</h1>

<h4 class="header-gray" id="CloseFile">def CreateUndefined();</h4>
<p class="dscr">Creates an undefined value. This method returns the current <a href="<%= Url.Action("integrationapi/python/cdocbuildercontext") %>">context</a>
and calls its <a href="<%= Url.Action("integrationapi/python/cdocbuildercontext/createundefined") %>">CreateUndefined</a> method.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.CreateUndefined</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
undefined = api.CreateUndefined()
</pre>
