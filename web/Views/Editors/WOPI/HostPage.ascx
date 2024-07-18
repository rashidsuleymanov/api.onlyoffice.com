<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">主机页面</span>
</h1>

    <p class="dscr">为了在您的应用程序中创建一个online office会话，主机必须创建一个 HTML 页面，该页面将在其中嵌入一个指向特定
    <a href="<%= Url.Action("wopi/discovery") %>#actions">WOPI 操作 URL</a>的 iframe 元素。</p>

    <p>主机页面必须包含以下元素：</p>
    <ul>
        <li>出于安全目的，主机必须通过一个 <em>form</em> 元素将 <a href="#access_token">access_token</a> 和 <a href="#access_token_ttl">access_token_ttl</a> 参数 <em>POST</em> 到online office iframe。
        <a href="#docs_api_config">docs_api_config</a> 参数是可选的。</li>
        <li>使用 <a href="<%= Url.Action("wopi/postmessage") %>">PostMessage</a>与online office iframe 交互的 JavaScript 代码。</li>
        <li>Body元素和online office的特定 CSS 样式，以避免视觉包。此外，
        主机页面应使用 <a href="<%= Url.Action("wopi/discovery") %>">WOPI 发现</a>中提供的网站图标 URL 为页面设置适当的网站图标。</li>
        <li>用于避免移动端浏览器的视觉和功能问题的 <em>viewport</em> 元标签。</li>
    </ul>

    <div class="header-gray">主机页面代码</div>
<pre>
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html&gt;

&lt;head runat="server"&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;

    &lt;title&gt;ONLYOFFICE Document Editors&lt;/title&gt;
    &lt;link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" /&gt;

    &lt;style type="text/css"&gt;
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            -ms-content-zooming: none;
        }
        
        #office_frame {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
            border: none;
            display: block;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;form id="office_form" name="office_form" target="office_frame" action="&lt;%= actionUrl %&gt;" method="post"&gt;
        &lt;input name="access_token" value="&lt;%= token %&gt;" type="hidden" /&gt;
        &lt;input name="access_token_ttl" value="&lt;%= tokenTtl %&gt;" type="hidden" /&gt;
        &lt;!-- &lt;input name="docs_api_config" value="&lt;%= apiConfig %&gt;" type="hidden" /&gt; --&gt;
    &lt;/form&gt;

    &lt;span id="frameholder"&gt;&lt;/span&gt;

    &lt;script type="text/javascript"&gt;
        var frameholder = document.getElementById('frameholder');
        var office_frame = document.createElement('iframe');
        office_frame.name = 'office_frame';
        office_frame.id = 'office_frame';

        office_frame.title = 'Office Frame';
        office_frame.setAttribute('allowfullscreen', 'true');

        office_frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox allow-downloads allow-modals');
        office_frame.setAttribute('allow', 'autoplay camera microphone display-capture');
        frameholder.appendChild(office_frame);

        document.getElementById('office_form').submit();
    &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</pre>

    <note>请注意， <em>"&lt;%= actionUrl %&gt;"</em>, <em>"&lt;%= token %&gt;"</em>, <em>"&lt;%= tokenTtl %&gt;"</em>, <em>"&lt;%= apiConfig %&gt;"</em> 字符串将使用适当的参数呈现。</note>
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
            <tr>
                <td id="access_token" class="copy-link">access_token</td>
                <td>主机将用于确定 WOPI 请求发出者的身份和权限的访问令牌。</td>
                <td>string</td>
            </tr>
            <tr>
                <td id="access_token_ttl" class="copy-link">access_token_ttl</td>
                <td>
                    访问令牌过期的时间，表示为自 1970 年 1 月 1 日 UTC 以来的毫秒数。
                    建议将此参数设置为 10 小时。
                    <br />
                    此参数也可以设置为 0。对于客户端来说，这意味着令牌的有效期是无限的或未知的。
                    在这种情况下，客户端可能会禁用任何提示用户刷新会话的 UI。这可能会导致访问令牌过期而导致意外的数据丢失。
                    因此，强烈建议为 <em>access_token_ttl</em> 指定一个值。
                </td>
                <td>integer</td>
            </tr>
            <tr>
                <td id="docs_api_config" class="copy-link">docs_api_config</td>
                <td>可选的<a href="<%= Url.Action("config") %>">config</a> 参数，用来通过 Docs API
                打开编辑器，这些参数不受 WOPI 协议支持。例如，要通过单击 <b>保存</b> 按钮启用 <a href="<%= Url.Action("save") %>#forcesave">forcesaving</a> 功能，
                必须在此对象中传递 <a href="<%= Url.Action("config/editor/customization") %>#forcesave">editorConfig.customization.forcesave</a> 参数。</td>
                <td>string</td>
            </tr>
        </tbody>
    </table>
    <div class="mobile-content"></div>
    <p>可以在 <a href="https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/hostpage" target="_blank">这里</a>找到有关构建主机页面的更多信息。</p>
