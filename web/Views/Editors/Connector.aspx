<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    自动化API
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">自动化API</span>
    </h1>

    <p class="dscr"><b>连接器</b> 是一个允许从外部源编辑文本文档、电子表格、演示文稿和可填写表单的类。
        使用"自动化API" 的示例可以在<a href="<%= Url.Action("interactingoutside") %>">此处</a>找到。
    </p>
    <p>要创建连接器，请使用<b>文档编辑器</b>对象的<a href="<%= Url.Action("methods") %>#createConnector">createConnector</a>方法 ：</p>
    <pre>
var connector = docEditor.createConnector()
</pre>
    <note>
        <p>请注意，该连接器仅适用于 <b>ONLYOFFICE 开发者版</b>。</p>
        <p>该类是一个额外的功能，在支付额外的费用后才能使用。如果您有任何疑问，请联系我们的销售团队：<a href="mailto:sales@onlyoffice.com" target="_blank">sales@onlyoffice.com</a>。</p>
    </note>
    <p>连接器与插件具有相同的接口。下面可以找到可用于此类的方法。</p>

    <ul>
        <li><a href="#addContextMenuItem">addContextMenuItem</a> - 向上下文菜单添加一个项目。</li>
        <li><a href="#addToolbarMenuItem">addToolbarMenuItem</a> - 向工具栏菜单添加一个项目。</li>
        <li><a href="#attachEvent">attachEvent</a> -添加事件侦听器。</li>
        <li><a href="#callCommand">callCommand</a> -将数据发送回编辑器。</li>
        <li><a href="#connect">connect</a> -将连接器连接到编辑器。</li>
        <li><a href="#detachEvent">detachEvent</a> -删除事件侦听器。</li>
        <li><a href="#disconnect">disconnect</a> -断开连接器与编辑器的连接。</li>
        <li><a href="#executeMethod">executeMethod</a> -使用连接器执行某些编辑器方法。</li>
        <li><a href="#updateContextMenuItem">updateContextMenuItem</a> - 使用指定的项目更新上下文菜单中的项目。</li>
    </ul>

    <h2>方法及其描述：</h2>
    <ul>
        <li>
            <p><b id="addContextMenuItem" class="copy-link">addContextMenuItem</b> - 调用该函数将项目添加到上下文菜单。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含上下文菜单项参数的数组。</td>
                        <td><a href="#ContextMenuItem">ContextMenuItem</a></td> 的数组
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>

            <div id="ContextMenuItem" class="copy-link header-gray">ContextMenuItem</div>
            <table class="table">
                <colgroup>
                <col class="table-name" />
                <col />
                <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>id</td>
                        <td>项目 ID。</td>
                        <td>字符串</td>
                    </tr>
                    <tr class="tablerow">
                        <td>text</td>
                        <td>项目文本。</td>
                        <td>字符串</td>
                    </tr>
                    <tr class="tablerow">
                        <td>data</td>
                        <td>项目数据（此数据将发送到点击事件回调）。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>disabled</td>
                        <td>指定当前项是否已禁用。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>icons</td>
                        <td>项目图标（请参阅插件 <a href="<%= Url.Action("config", "plugin") %>#icons">config</a> 文档）。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含当前项的上下文菜单项的数组。</td>
                        <td>ContextMenuItem 数组</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>

            <div class="header-gray">示例</div>
            <pre>
var items: [
    {
        "id": "onConvert",
        "text": getMessage("Convert to Markdown or HTML")
    }
]

connector.addContextMenuItem(items);
</pre>
        </li>

        <li>
            <p><b id="addToolbarMenuItem" class="copy-link">addToolbarMenuItem</b> - 调用该函数将项目添加到工具栏菜单。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>工具栏主菜单项参数。</td>
                        <td><a href="#ToolbarMenuMainItem">ToolbarMenuMainItem</a></td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            
            <div id="ToolbarMenuMainItem" class="copy-link header-gray">ToolbarMenuMainItem</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>说明</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>guid</td>
                        <td>插件 guid。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>tabs</td>
                        <td>包含当前工具栏菜单选项卡的数组项。</td>
                        <td><a href="#ToolbarMenuTab">ToolbarMenuTab</a 的数组></td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            
            <div id="ToolbarMenuTab" class="copy-link header-gray">ToolbarMenuTab</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>id</td>
                        <td>标签 ID。</td>
                        <td>字符串</td>
                    </tr>
                    <tr class="tablerow">
                        <td>text</td>
                        <td>标签文本。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含当前标签的工具栏菜单项的数组。</td>
                        <td><a href="#ToolbarMenuItem">ToolbarMenuItem</a></td> 的数组
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            
            <div id="ToolbarMenuItem" class="copy-link header-gray">ToolbarMenuItem</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>id</td>
                        <td>项目 ID。</td>
                        <td>字符串</td>
                    </tr>
                    <tr class="tablerow">
                        <td>类型</td>
                        <td>工具栏菜单项的相对垂直位置将根据其计算的基准的可能值。</td>
                        <td><a href="<%= Url.Action("global", "plugin") %>#ToolbarMenuItemType">ToolbarMenuItemType</a></td>
                    </tr>
                    <tr class="tablerow">
                        <td>text</td>
                        <td>项目文本。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>hint</td>
                        <td>项目提示。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>icons</td>
                        <td>项目图标（请参阅插件 <a href="<%= Url.Action("config", "plugin") %>#icons">config</a> 文档）。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>disabled</td>
                        <td>指定当前项目是否已禁用。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>enableToggle</td>
                        <td>指定是否启用项目切换。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>lockInViewMode</td>
                        <td>指定当前项目是否在查看模式下锁定。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>separator</td>
                        <td>指定工具栏菜单项之间是否使用分隔符。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>split</td>
                        <td>指定工具栏菜单项是否拆分。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>onClick</td>
                        <td>点击事件回调。</td>
                        <td>function</td>
                    </tr>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含当前项目的 <a href="#ContextMenuItem">上下文菜单项</a> 的数组。</td>
                        <td>ContextMenuItem 数组</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
                
            <div class="header-gray">示例</div>
            <pre>
var oToolbarMenuItem = {
    "id": "MeaningItem",
    "type": "button",
    "text": "Meaning",
    "hint": "Meaning",
    "icons": "resources/light/icon.png",
    "disabled": false,
    "enableToggle": false,
    "lockInViewMode": false,
    "separator": true,
    "split": true,
    "onClick": onClick,
    "items": [
        {
            "id": "onMeaningT",
            "text": "Explain text in comment"
        },
        {
            "id": "onFixSpelling",
            "text": "Fix spelling & grammar"
        },
        {
            "id": "onMakeLonger",
            "text": "Make longer"
        },
        {
            "id": "onMakeShorter",
            "text": "Make shorter"
        }
    ]
};
var oToolbarMenuTab = {
    "id": "ChatGPT",
    "text": "AI Assistant",
    "items": [oToolbarMenuItem]
};
var oToolbarMenuMainItem = {
    "guid": "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
    "tabs": [oToolbarMenuTab]
};

connector.addToolbarMenuItem(oToolbarMenuMainItem);
</pre>
        </li>

        <li>
            <p><b id="attachEvent" class="copy-link">attachEvent</b> -被调用以添加事件侦听器的函数，该函数将在指定事件传递到目标时被调用。
                所有可用事件的列表与插件的列表相同。可以在 <a href="<%= Url.Action("events", "plugin") %>">这里</a>找到。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>name</td>
                        <td>事件名称。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>callback</td>
                        <td>事件侦听器。</td>
                        <td>函数</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            <div class="header-gray">示例</div>
            <pre>
connector.attachEvent("onChangeContentControl", function()
{
    console.log("event: onChangeContentControl");
});
</pre>
        </li>

        <li>
            <p><b id="callCommand" class="copy-link">callCommand</b> -调用的函数，用于将数据发送回编辑器。
                它允许连接器发送可以插入到结果文档文件中的结构化数据（
                格式化的段落、表格、文本部分和单独的单词等）。</p>
            <note><b>ONLYOFFICE 文档生成器</b> 命令只能用于创建内容并将其插入文档编辑器
                (使用 <em>Api.GetDocument().InsertContent(...))</em>。由于在线编辑器中的联合编辑功能，存在此限制。</note>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>command</td>
                        <td>定义用JavaScript编写的命令，其目的是形成可插入结果文档文件（
                            格式化段落、表格、文本部分和单独单词等）的结构化数据。然后将数据发送给编辑器。
                            该命令必须与 <a href="<%= Url.Action("basic", "officeapi") %>">Office JavaScript API</a> 语法兼容。</td>
                        <td>函数</td>
                    </tr>
                    <tr class="tablerow">
                        <td>callback</td>
                        <td>方法返回的结果。这是一个可选参数。</td>
                        <td>函数</td>
                    </tr>
                    <tr class="tablerow">
                        <td>isNoCalc</td>
                        <td>定义是否可以重新计算文档。<b>true</b> 值用于在执行
                            <em>command</em> 参数中的函数后重新计算文档。<b>false</b> 值不会重新计算文档
                            （仅当您的编辑肯定不需要重新计算文档时才使用它）。默认值为 <b>false</b>。</td>
                        <td>boolean</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            <p>此方法在与其他JavaScript数据隔离的上下文中执行。如果需要将某些参数或其他数据传递给此方法，请使用 <a href="<%= Url.Action("scope", "plugin") %>">Asc.scope</a> 对象。</p>
            <div class="header-gray">示例</div>
            <pre>
Asc.scope.text = "Hello world!";

connector.callCommand(function() {

    var oDocument = Api.GetDocument();
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText(Asc.scope.text);
    oDocument.InsertContent([oParagraph]);

}, function() { console.log("callback command"); });
</pre>
        </li>

        <li>
            <p><b id="connect" class="copy-link">connect</b> - 调用该函数将连接器连接到编辑器。</p>
            <note>请注意，只有在使用 <a href="#disconnect">disconnect</a> 方法断开连接器并需要再次将其连接到编辑器时，
                才应调用此方法。创建连接器时，不需要使用 <em>connect</em> 方法，
                因为它会与 <a href="<%= Url.Action("methods") %>#createConnector">createConnector</a> 方法一起自动调用。</note>
            <div class="header-gray">示例</div>
            <pre>
connector.connect()
</pre>
        </li>

        <li>
            <p><b id="detachEvent" class="copy-link">detachEvent</b> - 调用该函数以删除事件侦听器。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>name</td>
                        <td>事件名称。</td>
                        <td>string</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            <div class="header-gray">示例</div>
            <pre>
connector.detachEvent("onChangeContentControl");
</pre>
        </li>

        <li>
            <p><b id="disconnect" class="copy-link">disconnect</b> - 调用该函数以断开连接器与编辑器的连接。</p>
            <div class="header-gray">示例</div>
            <pre>
connector.disconnect()
</pre>
        </li>

        <li>
            <p><b id="executeMethod" class="copy-link">executeMethod</b> - 调用该函数以使用连接器执行某些编辑器方法。这些方法的完整列表与插件相同。
                可以在 <a href="<%= Url.Action("executemethod/", "plugin") %>">这里</a>找到。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>name</td>
                        <td>必须执行的特定方法的名称。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>args</td>
                        <td>正在使用的方法具有的参数（如果有）。</td>
                        <td>array</td>
                    </tr>
                    <tr class="tablerow">
                        <td>callback</td>
                        <td>方法返回的结果。这是一个可选参数。</td>
                        <td>函数</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>
            <div class="header-gray">示例</div>
            <pre>
connector.executeMethod("SetFormValue",[forms[i]["InternalId"],"OnlyOffice BANK"],null);
</pre>
        </li>

        <li>
            <p><b id="updateContextMenuItem" class="copy-link">updateContextMenuItem</b> - 调用该函数来使用指定项更新上下文菜单中的项。</p>
            <div class="header-gray">参数</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>描述</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含上下文菜单项参数的数组。</td>
                        <td><a href="#toolbar-ContextMenuItem">ContextMenuItem</a></td> 的数组
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>

            <div id="toolbar-ContextMenuItem" class="copy-link header-gray">ContextMenuItem</div>
            <table class="table">
                <colgroup>
                    <col class="table-name" />
                    <col />
                    <col class="table-type" />
                </colgroup>
                <thead>
                    <tr class="tablerow">
                        <td>名称</td>
                        <td>说明</td>
                        <td>类型</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tablerow">
                        <td>id</td>
                        <td>项目 ID。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>text</td>
                        <td>项目文本。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>data</td>
                        <td>项目数据（此数据将发送到点击事件回调）。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>disabled</td>
                        <td>指定当前项目是否已禁用。</td>
                        <td>boolean</td>
                    </tr>
                    <tr class="tablerow">
                        <td>icons</td>
                        <td>项目图标（请参阅插件 <a href="<%= Url.Action("config", "plugin") %>#icons">config</a> 文档）。</td>
                        <td>string</td>
                    </tr>
                    <tr class="tablerow">
                        <td>items</td>
                        <td>包含当前项。</td>
                        <td>ContextMenuItem 数组</td>
                    </tr>
                </tbody>
            </table>
            <div class="mobile-content"></div>

            <div class="header-gray">示例</div>
            <pre>
var items: [
    {
        "id": "onConvert",
        "text": getMessage("Convert to Markdown or HTML")
    }
]

connector.updateContextMenuItem(items);
</pre>
        </li>
    </ul>

</asp:Content> 