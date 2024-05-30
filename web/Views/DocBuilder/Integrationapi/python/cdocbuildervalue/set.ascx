<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">Set</span>
</h1>

<h4 class="header-gray" id="Set">def Set(self, key, value);</h4>
<p class="dscr">Sets an array value by its index.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.Set</em> method is not used.</div>

<h2>Parameters:</h2>

<table class="table">
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td><em>key</em></td>
            <td>int</td>
            <td>The index of the array value.</td>
        </tr>
        <tr class="tablerow">
            <td><em>value</em></td>
            <td>CDocBuilderValue</td>
            <td>The array value to be set.</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
charts = document.Call("GetAllCharts")
chart =  api.Call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24)
charts.Set(1, oChart)
</pre>

<p>The <b>default[]</b> postfix expression can be also used to set an array value by its index:</p>
<pre>
property CDocBuilderValue default[int]
</pre>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
charts = document.Call("GetAllCharts")
chart =  api.Call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24)
charts[1, oChart]
</pre>
