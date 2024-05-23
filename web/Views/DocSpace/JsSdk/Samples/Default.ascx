<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">DocSpace JS SDK samples</span>
</h1>

<ul class="sample-block">
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("buildersamples/createformaldocument") %>">
            <div class="example-sample-img create-formal-document"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/sampleopenfile") %>">Open file in ONLYOFFICE editors</a></p>
            <p>Open a file in ONLYOFFICE editors using FileSelector.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/sampleopenfile") %>">More</a></p>
    </li>
</ul>