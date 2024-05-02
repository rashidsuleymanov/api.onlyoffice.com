<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">Config</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">The configuration parameters describe the behavior and display options of the DocSpace elements.</p>

<ul class="columns-4" style="list-style: none;">
    <li><a href="#buttonColor">buttonColor</a></li>
    <li><a href="#destroyText">destroyText</a></li>
    <li><a href="#checkCSP">checkCSP</a></li>
    <li><a href="#disableActionButton">disableActionButton</a></li>
    <li><a href="#downloadToEvent">downloadToEvent</a></li>
    <li><a href="#editorCustomization">editorCustomization</a></li>
    <li><a href="#editorGoBack">editorGoBack</a></li>
    <li><a href="#editorType">editorType</a></li>
    <li><a href="#events">events</a></li>
    <li><a href="#filter">filter</a></li>
    <li><a href="#filterParam">filterParam</a></li>
    <li><a href="#frameId">frameId</a></li>
    <li><a href="#height">height</a></li>
    <li><a href="#id">id</a></li>
    <li><a href="#infoPanelVisible">infoPanelVisible</a></li>
    <li><a href="#locale">locale</a></li>
    <li><a href="#mode">mode</a></li>
    <li><a href="#name">name</a></li>
    <li><a href="#requestToken">requestToken</a></li>
    <li><a href="#rootPath">rootPath</a></li>
    <li><a href="#selectorType">selectorType</a></li>
    <li><a href="#showFilter">showFilter</a></li>
    <li><a href="#showHeader">showHeader</a></li>
    <li><a href="#showMenu">showMenu</a></li>
    <li><a href="#showSelectorCancel">showSelectorCancel</a></li>
    <li><a href="#showSelectorHeader">showSelectorHeader</a></li>
    <li><a href="#showSettings">showSettings</a></li>
    <li><a href="#showSignOut">showSignOut</a></li>
    <li><a href="#showTitle">showTitle</a></li>
    <li><a href="#src">src</a></li>
    <li><a href="#theme">theme</a></li>
    <li><a href="#type">type</a></li>
    <li><a href="#viewAs">viewAs</a></li>
    <li><a href="#viewTableColumns">viewTableColumns</a></li>
    <li><a href="#width">width</a></li>
    <li><a href="#withBreadCrumbs">withBreadCrumbs</a></li>
    <li><a href="#withSearch">withSearch</a></li>
    <li><a href="#withSubtitle">withSubtitle</a></li>
</ul>

<div class="header-gray">Parameters</div>
<table class="table">
    <colgroup>
        <col class="table-name" />
        <col />
        <col class="table-type" />
        <col class="table-example" />
    </colgroup>
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Example</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td id="buttonColor" class="copy-link">buttonColor</td>
            <td>The selector button color.</td>
            <td>string</td>
            <td>"#5299E0"</td>
        </tr>
        <tr class="tablerow">
            <td id="checkCSP" class="copy-link">checkCSP</td>
            <td>Specifies whether to check for the presence of CSP headers before initialization.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="destroyText" class="copy-link">destroyText</td>
            <td>The text that will be inserted into the <em>div</em> tag when the <a href="<%= Url.Action("jssdk/methods") %>#destroyFrame">destroyFrame</a> method is called.</td>
            <td>string</td>
            <td>""</td>
        </tr>
        <tr class="tablerow">
            <td id="disableActionButton" class="copy-link">disableActionButton</td>
            <td>Specifies whether to disable the <b>Actions</b> button in the manager interface.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="downloadToEvent" class="copy-link">downloadToEvent</td>
            <td>Specifies whether to switch the SDK to the mode of working with download links through the <a href="<%= Url.Action("jssdk/events") %>#onDownload">onDownload</a> event.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="editorCustomization" class="copy-link">editorCustomization</td>
            <td>The parameters to customize editors. The parameters from <a href="<%= Url.Action("config/editor/customization", "editors") %>">this section</a> are used.</td>
            <td>object</td>
            <td>{}</td>
        </tr>
        <tr class="tablerow">
            <td id="editorGoBack" class="copy-link">editorGoBack</td>
            <td>Specifies whether the <b>File Location</b> button is displayed in the editor.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="editorType" class="copy-link">editorType</td>
            <td>The editor mode display type ("embedded", "desktop").</td>
            <td>string</td>
            <td>"desktop"</td>
        </tr>
        <tr class="tablerow">
            <td id="events" class="copy-link">events</td>
            <td>A list of DocSpace events that will be returned on certain actions within the SDK.</td>
            <td>object</td>
            <td>{
                "onSelectCallback": null,
                "onCloseCallback": null,
                "onAppReady": null,
                "onAppError": null,
                "onEditorCloseCallback": null,
                "onAuthSuccess": null,
                "onSignOut": null,
                "onDownload": null
            }</td>
        </tr>
        <tr class="tablerow">
            <td id="filter" class="copy-link">filter</td>
            <td>
                The filter parameters that facilitate searching files in the DocSpace manager:
                <ul>
                    <li>
                        <b>count</b> - a number of files to be displayed,
                        <br />
                        <b>type</b>: integer,
                        <br />
                        <b>example</b>: 100;
                    </li>
                    <li>
                        <b>page</b> - a page number,
                        <br />
                        <b>type</b>: integer,
                        <br />
                        <b>example</b>: 1;
                    </li>
                    <li>
                        <b>search</b> - a query to search for files,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "";
                    </li>
                    <li>
                        <b>sortorder</b> - the sort order of files ("descending", "ascending"),
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "descending";
                    </li>
                    <li>
                        <b>sortby</b> - the parameter by which the files will be sorted ("DateAndTime", "AZ", "Type", "Size", "DateAndTimeCreation", "Author"),
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "DateAndTime";
                    </li>
                    <li>
                        <b>withSubfolders</b> - specifies whether to exclude subfolders when searching for files,
                        <br />
                        <b>type</b>: boolean,
                        <br />
                        <b>example</b>: false.
                    </li>
                </ul>
            </td>
            <td>object</td>
            <td>{
    "count": 100,
    "page": 1,
    "search": "",
    "sortorder": "descending",
    "sortby": "DateAndTime",
    "withSubfolders": false
}</td>
        </tr>
        <tr class="tablerow">
            <td id="filterParam" class="copy-link">filterParam</td>
            <td>The filter parameters that facilitate searching files in the selector mode.
            The possible values: <em>"ALL", "DOCX", "IMG", "GZ", "DOCXF", "XLSX", "BackupOnly"</em>.</td>
            <td>string</td>
            <td>"ALL"</td>
        </tr>
        <tr class="tablerow">
            <td id="frameId" class="copy-link">frameId</td>
            <td>The frame SDK ID which is used to refer to the SDK instance.</td>
            <td>string</td>
            <td>"ds-frame"</td>
        </tr>
        <tr class="tablerow">
            <td id="height" class="copy-link">height</td>
            <td>The frame SDK height measured in percent.</td>
            <td>string</td>
            <td>"100%"</td>
        </tr>
        <tr class="tablerow">
            <td id="id" class="copy-link">id</td>
            <td>The element ID which will be used in the SDK initialization modes.</td>
            <td>string</td>
            <td>null</td>
        </tr>
        <tr class="tablerow">
            <td id="infoPanelVisible" class="copy-link">infoPanelVisible</td>
            <td>Specifies whether to display a button to show the info panel in the manager.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="locale" class="copy-link">locale</td>
            <td>The language of the DocSpace user interface which is specified with the four letter language code.</td>
            <td>string</td>
            <td>null</td>
        </tr>
        <tr class="tablerow">
            <td id="mode" class="copy-link">mode</td>
            <td>The SDK <a href="<%= Url.Action("jssdk/initmodes") %>">initialization mode</a> ("manager", "file-selector", 'room-selector", "editor", "viewer", "system")</td>
            <td>string</td>
            <td>"manager"</td>
        </tr>
        <tr class="tablerow">
            <td id="name" class="copy-link">name</td>
            <td>The name of the object inserted into the page. It is used for messaging at the SDK level.</td>
            <td>string</td>
            <td>"frameDocSpace"</td>
        </tr>
        <tr class="tablerow">
            <td id="requestToken" class="copy-link">requestToken</td>
            <td>The request token that is used to open public rooms and files in public rooms.</td>
            <td>string</td>
            <td>null</td>
        </tr>
        <tr class="tablerow">
            <td id="rootPath" class="copy-link">rootPath</td>
            <td>The path to the frame SDK. Opens a list of rooms by default.</td>
            <td>string</td>
            <td>"/rooms/shared/"</td>
        </tr>
        <tr class="tablerow">
            <td id="selectorType" class="copy-link">selectorType</td>
            <td>The selector type that defines filters for elements in the selector mode.
            The possible values: <em>"roomsOnly", "userFolderOnly", "exceptPrivacyTrashArchiveFolders", "exceptSortedByTagsFolders"</em>.</td>
            <td>string</td>
            <td>"roomsOnly"</td>
        </tr>
        <tr class="tablerow">
            <td id="showFilter" class="copy-link">showFilter</td>
            <td>Specifies whether the interface filter is displayed in the DocSpace manager.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showHeader" class="copy-link">showHeader</td>
            <td>Specifies whether the interface header is displayed in the mobile view manager.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showMenu" class="copy-link">showMenu</td>
            <td>Specifies whether the interface menu is displayed in the DocSpace manager.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showSelectorCancel" class="copy-link">showSelectorCancel</td>
            <td>Specifies whether the <b>Cancel</b> button is displayed in the selector mode.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showSelectorHeader" class="copy-link">showSelectorHeader</td>
            <td>Specifies whether the interface header is displayed in the selector mode.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showSettings" class="copy-link">showSettings</td>
            <td>Specifies whether to display the <b>Manage displayed columns</b> button for configuring the table columns in the manager.</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr class="tablerow">
            <td id="showSignOut" class="copy-link">showSignOut</td>
            <td>Specifies whether the <b>Sign out</b> button is displayed.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="showTitle" class="copy-link">showTitle</td>
            <td>Specifies whether the interface title is displayed in the DocSpace manager.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="src" class="copy-link">src</td>
            <td>The base URL to the DocSpace portal. It is used to generate links.</td>
            <td>string</td>
            <td>{PORTAL_SRC}</td>
        </tr>
        <tr class="tablerow">
            <td id="theme" class="copy-link">theme</td>
            <td>The DocSpace user interface theme ("Base", "Dark", "System").</td>
            <td>string</td>
            <td>"Base"</td>
        </tr>
        <tr class="tablerow">
            <td id="type" class="copy-link">type</td>
            <td>The platform type which is used by the browser and affects the parameters of the inserted object ("desktop", "mobile").</td>
            <td>string</td>
            <td>"desktop"</td>
        </tr>
        <tr class="tablerow">
            <td id="viewAs" class="copy-link">viewAs</td>
            <td>The way elements are arranged in the DocSpace manager ("row", "table", "tile").</td>
            <td>string</td>
            <td>"row"</td>
        </tr>
        <tr class="tablerow">
            <td id="viewTableColumns" class="copy-link">viewTableColumns</td>
            <td>The column names that are displayed for the table in the manager.</td>
            <td>string</td>
            <td>"Name,Type,Tags"</td>
        </tr>
        <tr class="tablerow">
            <td id="width" class="copy-link">width</td>
            <td>The frame SDK width measured in percent.</td>
            <td>string</td>
            <td>"100%"</td>
        </tr>
        <tr class="tablerow">
            <td id="withBreadCrumbs" class="copy-link">withBreadCrumbs</td>
            <td>Specifies whether to display the breadcrumbs in the selector mode.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="withSearch" class="copy-link">withSearch</td>
            <td>Specifies whether to display <b>Search</b> in the selector mode.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="withSubtitle" class="copy-link">withSubtitle</td>
            <td>Specifies whether to display the filter parameters in the selector mode.</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<div class="header-gray">Example</div>
<pre>{ 
    "buttonColor": "#5299E0", 
    "destroyText": "",
    "checkCSP" true,
    "disableActionButton": false,
    "downloadToEvent": false,
    "editorCustomization": {},
    "editorGoBack": true,
    "editorType": "desktop",
    "events": {
        "onSelectCallback": null,
        "onCloseCallback": null,
        "onAppReady": null,
        "onAppError": null,
        "onEditorCloseCallback": null,
        "onAuthSuccess": null,
        "onSignOut": null,
        "onDownload": null
    },
    "filter": {
          "count": 100,
          "page": 1,
          "search": "",
          "sortorder": "descending",
          "sortby": "DateAndTime",
          "withSubfolders": false
    },
    "filterParam": "ALL",
    "frameId": "ds-frame",
    "height":  "100%",
    "id": null,
    "infoPanelVisible": true,
    "locale": null,
    "mode": "manager",
    "name": "frameDocSpace",
    "requestToken": null,
    "rootPath": "/rooms/shared/",
    "selectorType": "exceptPrivacyTrashArchiveFolders",
    "showFilter": false,
    "showHeader": false,
    "showMenu": false,
    "showSelectorCancel": false,
    "showSelectorHeader": false,
    "showSettings": false,
    "showSignOut": true,
    "showTitle": true,
    "src": {PORTAL_SRC},
    "theme": "Base",
    "type": "desktop",
    "viewAs": "row",
    "viewTableColumns": "Name,Type,Tags",
    "width": "100%",
    "withBreadCrumbs": true,
    "withSearch": true,
    "withSubtitle": true
};</pre>
