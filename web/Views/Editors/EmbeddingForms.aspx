<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    将表单嵌入网页
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">将表单嵌入网页</span>
    </h1>
    <p class="dscr">Starting from version 7.0, ONLYOFFICE Docs offers the possibility to create, edit and collaborate on online forms, fill them out, and save forms as PDF.</p>
    <p>ONLYOFFICE forms are available in the PDF format which is intended for creating form templates from blank or any existing DOCX file
        and used for filling out the ready forms.</p>
    <note>
        <p>Please note that starting from version 8.0, the OFORM format is deprecated. To fill out the ready forms, only the PDF format is used.</p>
        <p>Starting from version 8.1, the DOCXF format is deprecated. To create and edit forms, only the PDF format is used.</p>
    </note>
    <p>These instructions help you add an online form to your website, making it available for saving as PDF and filling in.</p>
    <note>Please note that these instructions will only work when JWT is disabled. Starting from version 7.2, JWT is enabled by default, so you need to disable it.
        More information about token can be found <a href="<%= Url.Action("signature/") %>">here</a>.</note>

    <div class="container">
        <ul class="browser">
            <li class="browser tab active copy-link" id="editing">编辑表单</li>
            <li class="browser tab copy-link" id="filling">填写表单</li>
        </ul>
        <div id="editing" class="content active">
            <h2 id="pdf-for-editing" class="copy-link">How to open PDF form for editing from website</h2>
            <p>要在您的网站上打开DOCXF格式的在线表单进行编辑，请执行以下步骤：</p>
            <ol>
                <li>查找并打开ONLYOFFICE文档的 <em>index.html</em> 文件。</li>
                <li>
                    <p>通过指定API JavaScript文件的路径将其连接到Document Server API：</p>
                    <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>button</em> element to open the PDF form:</p>
                    <pre>
&lt;button onclick="open_form_template()"&gt;打开表单模板&lt;/button&gt;
</pre>
                </li>
                <li>
                    <p>在将打开编辑器的位置添加 <em>div</em> 元素：</p>
                    <pre>
&lt;div id="placeholder"&gt;&lt;/div&gt;
</pre>
                </li>
                <li>
                    <p>如果编辑器是打开的，添加脚本以关闭编辑器：</p>
                    <pre>
if (this.docEditor)
    { this.docEditor.destroyEditor()
}
</pre>
                </li>
                <li>
                    <p>Create the full URL address to the PDF form you need to open:</p>
                    <pre>
const url = "https://example.com/url-to-example-form.pdf";
</pre>
                </li>
                <li>
                    <p>创建key以标识要共同编辑的文件：</p>
                    <pre>
const key = filename + ".pdf";
</pre>
                </li>
                <li>
                    <p>使用要打开的文档的配置，添加初始化文档编辑器的脚本，并在placeholder元素中打开编辑器：</p>
                    <pre>
this.docEditor = new DocsAPI.DocEditor("placeholder",
{
    "document": {
        "fileType": "pdf",
        "key": key,
        "permissions": {
            "edit": true
        },
        "title": "Form Template",
        "url": url
    },
    "documentType": "pdf"
});
</pre>
                </li>
            </ol>
            <p>完整的代码片段如下所示：</p>
            <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
&lt;button onclick="open_form_template()"&gt;Open Form Template&lt;/button&gt;
&lt;div id="placeholder"&gt;&lt;/div&gt;
&lt;script&gt;
    function open_form_template() {
        if (this.docEditor) {
            this.docEditor.destroyEditor()
        }
        const url = "https://example.com/url-to-example-form.pdf";
        const key = filename + ".pdf";
        this.docEditor = new DocsAPI.DocEditor("placeholder",
        {
            "document": {
                "fileType": "pdf",
                "key": key,
                "permissions": {
                    "edit": true
                },
                "title": "Form Template",
                "url": url
            },
            "documentType": "pdf"
        });
    }
&lt;/script&gt;
</pre>
            <p>Once done, the PDF form can be opened for editing. After editing this file, you can fill out the ready forms. To do so, click the <b>Start filling</b> button.</p>
            <img class="screenshot max-width-832" alt="Embed pdf form for editing" src="<%= Url.Content("~/content/img/editor/embed-pdf-for-editing.png") %>" />
        </div>
        <div id="filling" class="content">
            <h2 id="pdf" class="copy-link">How to open PDF form for filling from website</h2>
            <p>To make an online form in the PDF format available for filling in, follow the steps below:</p>
            <ol>
                <li>查找并打开ONLYOFFICE文档的 <em>index.html</em> 文件。</li>
                <li>
                    <p>通过指定API JavaScript文件的路径将其连接到Document Server API：</p>
                    <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>button</em> element to open the PDF form:</p>
                    <pre>
&lt;button onclick="open_form()"&gt;打开表单&lt;/button&gt;
</pre>
                </li>
                <li>
                    <p>在将打开编辑器的位置添加 <em>div</em> 元素：</p>
                    <pre>
&lt;div id="placeholder"&gt;&lt;/div&gt;
</pre>
                </li>
                <li>
                    <p>如果编辑器是打开的，添加脚本以关闭编辑器：</p>
                    <pre>
if (this.docEditor) {
    this.docEditor.destroyEditor()
}
</pre>
                </li>
                <li>
                    <p>Create the full URL address to the PDF form you need to open:</p>
                    <pre>
const url = "https://example.com/url-to-example-form.pdf";
</pre>
                </li>
                <li>
                    <p>创建用于标识文件的key</p>
                    <pre>
const key = filename + ".pdf";
</pre>
                    <note>Please note that the <em>key</em> field is not passed to the configuration of the editors. This field will be automatically generated as a random number.
                        This allows making all sessions of opening the form independent. So, collaboration on the PDF form is disabled.
                        That's why anyone can open the form and fill it out without disturbing others.</note>
                </li>
                <li>
                    <p>使用要打开的文档的配置，添加初始化文档编辑器的脚本，并在placeholder元素中打开编辑器：</p>
                    <pre>
this.docEditor = new DocsAPI.DocEditor("placeholder",
{
    "document": {
        "fileType": "pdf",
        "permissions": {
            "edit": false,
            "fillForms": true
        },
        "title": "Form",
        "url": url
    },
    "documentType": "pdf"
});
</pre>
                </li>
            </ol>
            <p>完整的代码片段如下所示：</p>
            <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
&lt;button onclick="open_form()"&gt;Open Form&lt;/button&gt;
&lt;div id="placeholder"&gt;&lt;/div&gt;
&lt;script&gt;
    function open_form() {
        if (this.docEditor) {
            this.docEditor.destroyEditor()
        }
        const url = "https://example.com/url-to-example-form.pdf";
        const key = filename + ".pdf";
        this.docEditor = new DocsAPI.DocEditor("placeholder",
        {
            "document": {
                "fileType": "pdf",
                "permissions": {
                    "edit": false,
                    "fillForms": true
                },
                "title": "Form",
                "url": url
            },
            "documentType": "pdf"
        });
    }
&lt;/script&gt;
</pre>
            <p>Once done, the PDF form can be opened for filling. After filling in all the required fields, you can submit your data.
                To do so, click the <b>Complete & Submit</b> button.</p>
            <img class="screenshot max-width-832" alt="Embed pdf form" src="<%= Url.Content("~/content/img/editor/embed-pdf.png") %>" />
        </div>
    </div>

    <script type="text/javascript">
        $('ul.browser').on('click', 'li:not(.browser tab active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.container').find('div.content').removeClass('active').eq($(this).index()).addClass('active');
        });
        var loc = window.location.hash;
        if (loc != "") {
            var id = loc.substring(1);;
            $('.browser .tab').removeClass('active');
            $('.browser .tab[id="'+id  +'"]').addClass('active');
            $('.content').removeClass('active');
            $('.content[id="'+id  +'"]').addClass('active');
        }
    </script>

</asp:Content>
