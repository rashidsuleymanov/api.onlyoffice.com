<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    设置头像
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">设置头像</span>
    </h1>
    <p class="dscr">参考图和以下步骤说明了在 ONLYOFFICE Docs 中为用户设置头像的过程。</p>
    <img alt="Avatars" src="<%= Url.Content("~/content/img/editor/avatars.png") %>" />
    <ol>
        <li>用户发送请求以获取用户列表并在<b>文档编辑器</b>中设置他们的头像。</li>
         <li><b>文档编辑器</b>将请求通知<b>文档管理器</b>。</li>
         <li><b>文档管理器</b>将用户列表发送到<b>文档编辑器</b>，其中将显示他们的头像。</li>
         <li>用户在<b>文档编辑器</b>中打开评论或共同编辑者列表，其中用户的头像显示在其姓名附近。</li>
     </ol>

    <h2 id="apply" class="copy-link">在实践中如何做到这一点</h2>
    <ol>
        <li>创建一个空的 <em>html</em> 文件来<a href="<%= Url.Action("open") %>#apply">打开文档</a>。</li>
        <li>
            <p>要设置当前用户头像，请使用初始化配置的 <a href="<%= Url.Action("config/editor") %>#user">editorConfig.user.image</a> 字段：</p>
            <pre>
new DocsAPI.DocEditor("placeholder", {
    "editorConfig": {
        "user": {
            "group": "Group1",
            "id": "78e1e841",
            "image": "https://example.com/url-to-user-avatar.png",
            "name": "John Smith"
        }
    },
});
</pre>
        </li>
        <li>
            <p>
                在文档编辑器初始化的配置脚本中，指定用于设置用户头像的事件处理程序。
                当用户打开评论或共同编辑者列表时，将调用 <a href="<%= Url.Action("config/events") %>#onRequestUsers">onRequestUsers</a> 事件 <em>data.id</em> 参数。
                操作类型为 <em>info</em> 的 <em>data.c</em> 参数也会在此事件中传递。
            </p>
            <div class="img-block-2">
                <div>
                    <img class="screenshot" alt="iOS error" src="<%= Url.Content("~/content/img/editor/avatars-comments.png") %>" />
                </div>
                <div>
                    <img class="screenshot" alt="iOS managing" src="<%= Url.Content("~/content/img/editor/avatars-coediting.png") %>" />
                </div>
            </div>
            <pre>
var onRequestUsers = function (event) {
    var c = event.data.c;
    var id = event.data.id;
    ...
};

var docEditor = new DocsAPI.DocEditor("placeholder", {
    "events": {
        "onRequestUsers": onRequestUsers,
        ...
    },
    ...
});
</pre>
        </li>
        <li>
            <p>
                为了设置用户的头像，必须调用 <a href="<%= Url.Action("methods") %>#setUsers">setUsers</a> 方法：
            </p>
            <pre>
docEditor.setUsers({
    "c": "info",
    "users": [
        {
            "email": "john@example.com",
            "id": "78e1e841",
            "image": "https://example.com/url-to-user-avatar1.png",
            "name": "John Smith"
        },
        {
            "email": "kate@example.com",
            "id": "F89d8069ba2b",
            "image": "https://example.com/url-to-user-avatar2.png",
            "name": "Kate Cage"
        },
        ...
    ]
});
</pre>
            <p>
                其中 <b>example.com</b> 是安装<b>文档管理器</b>和<b>文档存储服务</b>的服务器的名称。
                请参阅<a href="<%= Url.Action("howitworks") %>">工作原理</a>部分，了解有关 ONLYOFFICE Docs 服务客户端-服务器交互的更多信息。
            </p>
        </li>
    </ol>

</asp:Content>
