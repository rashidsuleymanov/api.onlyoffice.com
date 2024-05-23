<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">CreateArray</span>
</h1>

<h4 class="header-gray" id="CreateArray">def CreateArray(length);</h4>
<p class="dscr">Creates an array value. This method returns the current <a href="<%= Url.Action("integrationapi/python/cdocbuildercontext") %>">context</a>
and calls its <a href="<%= Url.Action("integrationapi/python/cdocbuildercontext/createarray") %>">CreateArray</a> method.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderValue.CreateArray</em> method is not used.</div>

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
            <td><em>length</em></td>
            <td>int</td>
            <td>The array length.</td>
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
array = api.CreateArray()
</pre>
