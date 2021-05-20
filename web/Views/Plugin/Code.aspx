﻿<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Plugin code
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">Plugin code</span>
    </h1>

    <p class="dscr">The main plugin code is placed to a <em>.js</em> file which describes what and how must be done by the plugin. This file is placed to the plugin root folder together with the <a href="<%= Url.Action("config") %>">config.json</a> and <a href="<%= Url.Action("indexhtml") %>">index.html</a> files.</p>

    <h2>How it works</h2>

    <p>Any plugin has <a href="<%= Url.Action("plugin") %>">window.Asc.plugin</a> object which in its turn has several methods for it to interact with ONLYOFFICE document, spreadsheet and presentation editors.</p>

    <p>For the plugin to work the developer must specify two obligatory methods for the <a href="<%= Url.Action("plugin") %>">window.Asc.plugin</a> object: <a href="<%= Url.Action("init") %>">window.Asc.plugin.init</a> and <a href="<%= Url.Action("button") %>">window.Asc.plugin.button</a>. After that the <a href="<%= Url.Action("callcommand") %>">window.Asc.plugin.callCommand</a> method is used to send the data to the editors using the in-built <b>ONLYOFFICE Document Builder</b> <a href="<%= Url.Action("integrationapi/cdocbuilder/executecommand", "docbuilder") %>">API</a> features.</p>
    
    <p>If the plugin operates with an OLE object, <a href="<%= Url.Action("executecommand") %>">window.Asc.plugin.executeCommand</a> method is used to manage it.</p>

    <p>Let's see how this is done in the <em>helloworld.js</em> plugin:</p>

    <pre>
(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.callCommand(function() {
            var oDocument = Api.GetDocument();
            var oParagraph = Api.CreateParagraph();
            oParagraph.AddText("Hello world!");
            oDocument.InsertContent([oParagraph]);
        }, true);
    };
    window.Asc.plugin.button = function (id) {
    };
})(window, undefined);
</pre>

    <p>When the plugin object is being initialized (<em>window.Asc.plugin.init = function () {...}</em>), the editor forms a paragraph with the <em>Hello World</em> phrase and then uses <b>ONLYOFFICE Document Builder</b> <a href="<%= Url.Action("basic", "docbuilder") %>">API</a> to create the document with this text in it (with the help of the <a href="<%= Url.Action("callcommand") %>">window.Asc.plugin.callCommand</a> method - <em>this.callCommand(function() {...})</em>).</p>

    <div class="note">Please note, that all <a href="<%= Url.Action("basic", "docbuilder") %>">ONLYOFFICE Document Builder</a> features are already included into all the versions (including the open source one) of ONLYOFFICE document editors, this is how the plugins interact with the editors. The standalone <b>ONLYOFFICE Document Builder</b> version is required, however, in case you want to create documents without any document editors.</div>

    <p>The only <b>OK</b> button (<em>window.Asc.plugin.button = function (id) {...}</em>) is used to create the text and finish the work with the plugin.</p>

    <p>More existing open source plugin examples can be found <a href="<%= Url.Action("example") %>">here</a>.</p>

</asp:Content>
