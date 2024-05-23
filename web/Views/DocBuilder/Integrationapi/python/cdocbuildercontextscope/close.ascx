<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">Close</span>
</h1>

<h4 class="header-gray" id="CloseFile">def Close(self);</h4>
<p class="dscr">Closes the current scope. This method will be called automatically when the descructor is executed.</p>
<div class="note">Please note, that for the <em>.docbuilder</em> file the <em>CDocBuilderContextScope.Close</em> method is not used.</div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
scope = context.CreateScope()
scope.Close()
</pre>
