<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">GetLength</span>
</h1>

<h4 class="header-gray" id="CloseFile">def GetLength(self);</h4>
<p class="dscr">Returns the length if the <b>CDocBuilderValue</b> object is an array. Otherwise, returns 0.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.GetLength</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument");
charts = document.Call("GetAllCharts");
length = charts.GetLength();
</pre>
