<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("addingdms/") %>"></a>
    <span class="hdr">Getting viewport settings</span>
</h1>

<p>Starting from version 8.1, you can get the viewport settings of the desktop editors.
 This method is used to set the space between the top panel and the Desktop Editors widget.</p>

<pre>
window.AscDesktopEditor.getViewportSettings();
</pre>

<p>This method returns an object with the following parameters:</p>
<pre>
{ 
    "widgetType": "window",
    "captionHeight" : 100
}
</pre>

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
            <td id="widgetType" class="copy-link">widgetType</td>
            <td>The widget type (<em>"window"</em> or <em>"tab"</em>).</td>
            <td>string</td>
            <td>"window"</td>
        </tr>
        <tr class="tablerow">
            <td id="captionHeight" class="copy-link">captionHeight</td>
            <td>The caption height.</td>
            <td>integer</td>
            <td>100</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<p>You can also subscribe to the <em>onViewportSettingsChanged</em> event which is called every time the viewport settings are changed:</p>
<pre>
window.AscDesktopEditor.attachEvent("onViewportSettingsChanged", function(){
    console.log ("The viewport settings have been changed.");
});
</pre>

