<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">CreateObject</span>
</h1>

<h4 class="header-gray" id="CreateObject">def CreateObject(self);</h4>
<p class="dscr">Creates an empty object, an analogue of <em>{}</em> in JS.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContext.CreateObject</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateObject()
</pre>
