<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
   <span class="hdr">Run</span>
</h1>

<h4 class="header-gray" id="Run">def Run(self, path);</h4>
<p class="dscr">Runs the <b>ONLYOFFICE Document Builder</b> executable. If you do not want to write a Python application, you can simply use the <b>docbuilder.exe</b> executable file
and run it with the <b>.docbuilder</b> file as an argument, where all the code for the document file creation will be written.
For Python, create the <em>CDocBuilder</em> object and call the <em>Run</em> method with the path to the executable file from the <em>path</em> parameter.</p>

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
            <td><em>path</em></td>
            <td>str</td>
            <td>The path to the <b>ONLYOFFICE Document Builder</b> executable.</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<h2>Example</h2>
<h4 class="header-gray" >Python</h4>
<pre>
builder = docbuilder.CDocBuilder()
builder.Run("path-to-script.docbuilder")
</pre>
<h4 class="header-gray" >.docbuilder</h4>
<pre>
docbuilder.exe mydocument.docbuilder
</pre>
