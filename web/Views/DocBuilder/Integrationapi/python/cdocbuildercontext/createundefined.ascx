<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">CreateUndefined</span>
</h1>

<h4 class="header-gray" id="CloseFile">def CreateUndefined(self);</h4>
<p class="dscr">Creates an undefined value, an analogue of <em>undefined</em> in JS.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContext.CreateUndefined</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateUndefined()
docbuilder.CDocBuilder.Dispose()
</pre>
