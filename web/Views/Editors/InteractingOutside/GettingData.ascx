<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("interactingoutside/") %>"></a>
    <span class="hdr">Retrieving form data</span>
</h1>

<p class="dscr">Extracting and processing form input.</p>
<p>The user can choose a username from the list and all the fields in the form editor will be filled with the user contact information. 
    At the same time, this data will be received from the form in JSON format.</p>

<select id="persons" name="persons" required>
    <option disabled selected value="">Choose Example</option>
    <% var persons = Persons.GetPersons();
    foreach (var person in persons)
    { %>
        <option value="<%= person.PostalCode %>"><%= person.FirstName %> <%= person.LastName %></option>
    <% } %>
</select>

<div id="editorSpace">
    <div id="placeholder"></div>
</div>
<br/ >
<h3>JSON Result</h3>
<pre id="jsonOutput"></pre>
<br/ >
<h1>How it works</h1>

<ol>
    <li>
        <p>When the user opens a form document, the <a href="<%= Url.Action("executemethod/text/getallcontentcontrols", "plugin") %>">GetAllContentControls</a> method is executed
        to collect all the content controls from the document:</p>
        <pre>
var contentControls = [];
var onDocumentReady = function () {
    window.connector = docEditor.createConnector();
    connector.executeMethod("GetAllContentControls", null, function (data) {
        contentControls = data.map(control => {
            return control;
        });
        contentControls.forEach(control => {
            connector.executeMethod("GetFormValue", [control.InternalId], function (value) {
                control.Value = value || "";
            });
        });
    });
};
</pre>
    </li>
    <li>
        <p>Create a <b>loadToJSON</b> function that will use the <a href="<%= Url.Action("executemethod/form/getformvalue", "plugin") %>">GetFormValue</a> method to get the values of the content controls and load them into JSON format:</p>
<pre>
var loadToJSON = async function () {
    var jsonData = {};
    for (const element of contentControls) {
        const value = await new Promise(resolve => {
            connector.executeMethod("GetFormValue", [element.InternalId], value => {
                resolve(value || "");
            });
        });
        if (value !== "") {
            jsonData[element.Tag] = value;
        }
    }
    document.getElementById("jsonOutput").textContent = JSON.stringify(jsonData, null, 2);
};
</pre>
    </li>
</ol>
<note>
    <p>Please note that the connector is available only for <b>ONLYOFFICE Developer Edition</b>.</p>
    <p>This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <a href="mailto:sales@onlyoffice.com" target="_blank">sales@onlyoffice.com</a>.</p>
</note>
<script id="scriptApi" type="text/javascript" src="<%= ConfigurationManager.AppSettings["editor_url"] ?? "" %>/web-apps/apps/api/documents/api.js"></script>

<script type="text/javascript">
    var config = <%= Config.Serialize(
        new Config
            {
                Document = new Config.DocumentConfig
                    {
                        FileType = "pdf",
                        Key = "apiwh" + Guid.NewGuid(),
                        Permissions = new Config.DocumentConfig.PermissionsConfig(),
                        Title = "Demo.pdf",
                        Url = ConfigurationManager.AppSettings["storage_demo_url"] + "withtags.pdf"
                    },
                DocumentType = "pdf",
                EditorConfig = new Config.EditorConfigConfiguration
                    {
                        CallbackUrl = Url.Action("callback", "editors", null, Request.Url.Scheme),
                        Customization = new Config.EditorConfigConfiguration.CustomizationConfig
                            {
                                HideRightMenu = true,
                                HideRulers = true,
                                IntegrationMode = "embed",
                            }
                    },
                Height = "550px",
                Width = "100%"
            }) %>;
    var contentControls = [];
    var onDocumentReady = function () {
        window.connector = docEditor.createConnector();

        connector.executeMethod("GetAllContentControls", null, function (data) {
            contentControls = data.map(control => {
                return control;
            });

            contentControls.forEach(control => {
                connector.executeMethod("GetFormValue", [control.InternalId], function (value) {
                    control.Value = value || "";
                });
            });
        });
    };

    config.events = {
        onDocumentReady: onDocumentReady,
    };

    window.docEditor = new DocsAPI.DocEditor("placeholder", config);

    $("#persons").change(async function () {
        const postalCode = $(this).val();
        const persons = await $.getJSON("<%= Url.Content("~/app_data/editor/wildcarddata/persons.json") %>");

        const person = persons.find(p => p.PostalCode === postalCode);
        if (person) {
            for (const key in person) {
                const value = person[key];
                await setFormValue(key, value);
            }

            await loadJSONFromForm();
        }
    });

    var setFormValue = async function (tag, value) {
        const forms = await new Promise(resolve => {
            connector.executeMethod("GetFormsByTag", [tag], resolve);
        });

        if (forms && forms.length > 0) {
            await new Promise(resolve => {
                connector.executeMethod("SetFormValue", [forms[0].InternalId, value], resolve);
            });
        }
    };

    var loadJSONFromForm = async function () {
        var jsonData = {};
        for (const element of contentControls) {
            const value = await new Promise(resolve => {
                connector.executeMethod("GetFormValue", [element.InternalId], value => {
                    resolve(value || "");
                });
            });
    
            if (value !== "") {
                jsonData[element.Tag] = value;
            }
        }
        document.getElementById("jsonOutput").textContent = JSON.stringify(jsonData, null, 2);
    };
    document.addEventListener('DOMContentLoaded', function() {
        var jsonData = {
            "LastName": "",
            "DateOfBirth": "",
            "FirstName": "",
            "Male": "",
            "Female": "",
            "MiddleName": "",
            "Phone": "",
            "Title": "",
            "Email": "",
            "Number/street": "",
            "City": "",
            "PostalCode": "",
            "Country": "",
            "DateOfCompletion": ""
        };
    
        document.getElementById("jsonOutput").textContent = JSON.stringify(jsonData, null, 2);
    });
</script>
