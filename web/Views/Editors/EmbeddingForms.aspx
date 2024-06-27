<%@ Page
    Title=""
    Language="C#"
    MasterPageFile="~/Views/Shared/Site.Master"
    Inherits="System.Web.Mvc.ViewPage"
    ContentType="text/html" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Embedding forms into a web page
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>
        <span class="hdr">Embedding forms into a web page</span>
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
            <li class="browser tab active copy-link" id="editing">Editing forms</li>
            <li class="browser tab copy-link" id="filling">Filling forms</li>
        </ul>
        <div id="editing" class="content active">
            <h2 id="pdf-for-editing" class="copy-link">How to open PDF form for editing from website</h2>
            <p>To open an online form in the PDF format for editing from your website, follow the steps below:</p>
            <ol>
                <li>Find and open the <em>index.html</em> file of your ONLYOFFICE Docs.</li>
                <li>
                    <p>Connect it to the ONLYOFFICE Docs API by specifying the path to the API JavaScript file:</p>
                    <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>button</em> element to open the PDF form:</p>
                    <pre>
&lt;button onclick="open_form_template()"&gt;Open Form Template&lt;/button&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>div</em> element where the editor will be opened:</p>
                    <pre>
&lt;div id="placeholder"&gt;&lt;/div&gt;
</pre>
                </li>
                <li>
                    <p>Add the script to close the editor in case it is open:</p>
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
                    <p>Create the key to identify the file for co-editing:</p>
                    <pre>
const key = filename + ".pdf";
</pre>
                </li>
                <li>
                    <p>Add the script initializing the Document Editor with the configuration for the document you want to open and open the editor in the placeholder element:</p>
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
            <p>The full code fragment looks like this:</p>
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
                <li>Find and open the <em>index.html</em> file of your ONLYOFFICE Docs.</li>
                <li>
                    <p>Connect it to the ONLYOFFICE Docs API by specifying the path to the API JavaScript file:</p>
                    <pre>
&lt;script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"&gt;&lt;/script&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>button</em> element to open the PDF form:</p>
                    <pre>
&lt;button onclick="open_form()"&gt;Open Form&lt;/button&gt;
</pre>
                </li>
                <li>
                    <p>Add the <em>div</em> element where the editor will be opened:</p>
                    <pre>
&lt;div id="placeholder"&gt;&lt;/div&gt;
</pre>
                </li>
                <li>
                    <p>Add the script to close the editor in case it is open:</p>
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
                    <p>Create the key to identify the file:</p>
                    <pre>
const key = filename + ".pdf";
</pre>
                    <note>Please note that the <em>key</em> field is not passed to the configuration of the editors. This field will be automatically generated as a random number.
                        This allows making all sessions of opening the form independent. So, collaboration on the PDF form is disabled.
                        That's why anyone can open the form and fill it out without disturbing others.</note>
                </li>
                <li>
                    <p>Add the script initializing the Document Editor with the configuration for the document you want to open and open the editor in the placeholder element:</p>
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
            <p>The full code fragment looks like this:</p>
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
