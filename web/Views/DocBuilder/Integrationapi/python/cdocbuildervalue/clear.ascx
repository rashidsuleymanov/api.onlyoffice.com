<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">Clear</span>
</h1>

<h4 class="header-gray" id="CloseFile">def Clear(self);</h4>
<p class="dscr">Clears the <b>CDocBuilderValue</b> object.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.Clear</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
oDocument.Clear();.Clear()
</pre>
