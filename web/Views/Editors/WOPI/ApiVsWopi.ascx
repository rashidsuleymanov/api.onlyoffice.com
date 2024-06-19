<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">ONLYOFFICE ?? API ? WOPI</span>
</h1>

    <p class="dscr">????? API ? WOPI ? <a href="https://www.onlyoffice.com/zh/office-suite.aspx?from=api" target="_blank">ONLYOFFICE ??</a> ?????????</p>
    <p>??????????????????</p>

    <table class="table">
        <colgroup>
            <col />
            <col class="table-api" />
            <col class="table-wopi" />
        </colgroup>
        <thead class="table-header-gray">
            <tr class="tablerow">
                <td class="borders"></td>
                <td style="text-align: center" class="borders"><h2>API</h2></td>
                <td style="text-align: center" class="borders"><h2>WOPI</h2></td>
            </tr>
        </thead>
        <tbody>
            <tr class="tablerow">
                <td id="general-info" class="table-header-gray borders copy-link table-style"><h2>????</h2></td>
                <td class="borders">
                    <p>????????:????????? ONLYOFFICE ??(?????)???????,
                        ???????????????</p>
                    <p><a href="<%= Url.Action("basic") %>">????</a></p>
                </td>
                <td class="borders">
                    <p>Web ??????????:Microsoft ??? REST ???,????????,
                        ????????????????????</p>
                    <p><a href="<%= Url.Action("wopi/") %>">????</a></p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="integration" class="table-header-gray borders copy-link table-style"><h2>? sync&share ? DMS ??????</h2></td>
                <td class="borders">
                    <p>?? ONLYOFFICE ????????????????????</p>
                    <p><a href="https://www.onlyoffice.com/zh/all-connectors.aspx?from=api" target="_blank">??????</a></p>
                </td>
                <td class="borders">
                    <p>?? WOPI ???/?? WOPI ??????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="collaboration" class="table-header-gray borders copy-link table-style"><h2>??(??)</h2></td>
                <td class="borders">
                    <p>???????????????????</p>
                </td>
                <td class="borders">
                    <p>????????,?????????????????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="customization" class="table-header-gray borders copy-link table-style"><h2>??</h2></td>
                <td class="borders">
                    <ul>
                        <li>??????? <a href="<%= Url.Action("config/editor") %>#lang">??</a></li>
                        <li>??????? <a href="<%= Url.Action("config/editor/customization") %>#uiTheme">??</a></li>
                        <li>?? <b>??</b> ?????? <a href="<%= Url.Action("config/editor/customization") %>#chat">??</a> ??</li>
                        <li>???? <b>??</b> ????? <a href="<%= Url.Action("config/editor/customization") %>#customer">??</a> ??</li>
                        <li>??? <a href="<%= Url.Action("config/editor/customization") %>">??</a>
                        ???????????????????????</li>
                        <li>?? <a href="<%= Url.Action("config/editor") %>#templates">??</a> ??????</li>
                        <li>?? <a href="<%= Url.Action("config/editor") %>#recent">???????</a>??</li>
                        <li>?? <a href="<%= Url.Action("config/editor/plugins") %>">??</a></li>
                    </ul>
                </td>
                <td class="borders">
                    <ul>
                        <li>??????? <a href="<%= Url.Action("wopi/discovery") %>#ui">??</a></li>
                        <li>??????? <a href="<%= Url.Action("wopi/discovery") %>#thm">??</a></li>
                        <li>?? <b>??</b> ?????? <a href="<%= Url.Action("wopi/discovery") %>#dchat">??</a> ??</li>
                        <li>???? <b>??</b> ????? <a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#BreadcrumbBrandUrl">??</a> ??</li>
                    </ul>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="denying-requests" class="table-header-gray borders copy-link table-style"><h2>??????</h2></td>
                <td class="borders">
                    <p>???? ONLYOFFICE ??????? <a href="<%= Url.Action("wopi/") %>#ip-filter">?????</a> ? IP(???)?</p>
                </td>
                <td class="borders">
                    <p>???? ONLYOFFICE ??????? <a href="<%= Url.Action("wopi/") %>#ip-filter">?????</a> ? IP(???)?</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="access-to-server" class="table-header-gray borders copy-link table-style"><h2>?????? ONLYOFFICE ???</h2></td>
                <td class="borders">
                    <p>????????? JWT ?????? <a href="<%= Url.Action("signature/browser") %>">??????</a>?????</p>
                </td>
                <td class="borders">
                    <p>????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="access-to-data" class="table-header-gray borders copy-link table-style"><h2>????????</h2></td>
                <td class="borders">
                    <p>ONLYOFFICE ??????????? JWT ????
                        ????????? <a href="<%= Url.Action("signature/request") %>#callbackUrl">??</a>,
                        ???????????????</p>
                </td>
                <td class="borders">
                    <p>?? ONLYOFFICE ?????????????????????
                    <a href="<%= Url.Action("wopi/discovery") %>">LWOPI ?? XML?</a>?
                    <a href="<%= Url.Action("wopi/proofkeys") %>">proof-key</a> ????????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="basic-actions" class="table-header-gray borders copy-link table-style"><h2>????</h2></td>
                <td class="borders">
                    <p>?????????????????????????????????</p>
                </td>
                <td class="borders">
                    <p>??????????????????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="methods" class="table-header-gray borders copy-link table-style"><h2>???????????</h2></td>
                <td class="borders">
                    <ul>
                        <li>?????<a href="<%= Url.Action("methods") %>#downloadAs">??</a> ??</li>
                        <li>?? <a href="<%= Url.Action("methods") %>#setFavorite">???</a> ??</li>
                        <li>???? <a href="<%= Url.Action("methods") %>#showMessage">??</a>?????</li>
                    </ul>
                </td>
                <td class="borders">
                    <p>???????</p>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="events" class="table-header-gray borders copy-link table-style"><h2>???????????</h2></td>
                <td class="borders">
                    <ul>
                        <li><a href="<%= Url.Action("config/events") %>#onRequestClose">??</a> ???</li>
                        <li><a href="<%= Url.Action("config/editor/customization") %>#goback">??</a> ???</li>
                        <li>?????<a href="<%= Url.Action("config/events") %>#onRequestEditRights">??</a> ?????</li>
                        <li><a href="<%= Url.Action("config/events") %>#onRequestRename">???</a> ??</li>
                        <li>?? <a href="<%= Url.Action("config/events") %>#onRequestSharingSettings">????</a> ?????</li>
                        <li>???? <a href="<%= Url.Action("config/events") %>#onRequestHistory">????</a></li>
                        <li>????<a href="<%= Url.Action("config/events") %>#onRequestInsertImage">????</a></li>
                        <li><a href="<%= Url.Action("config/events") %>#onRequestMailMergeRecipients">????</a></li>
                        <li>????????<a href="<%= Url.Action("config/events") %>#onRequestCompareFile">??</a></li>
                        <li>?? <a href="<%= Url.Action("config/events") %>#onMakeActionLink">????</a></li>
                        <li>??????? <a href="<%= Url.Action("config/events") %>#onRequestSaveAs">??</a> ??</li>
                        <li>??? <a href="<%= Url.Action("config/events") %>#onRequestUsers">??</a>?????</li>
                        <li><a href="<%= Url.Action("config/events") %>#onRequestCreateNew">??</a> ?????</li>
                    </ul>
                </td>
                <td class="borders">
                    <ul>
                        <li><a href="<%= Url.Action("wopi/postmessage") %>#UI_Close">??</a> ???</li>
                        <li><a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#BreadcrumbFolderUrl">??</a> ???</li>
                        <li>?????<a href="<%= Url.Action("wopi/postmessage") %>#UI_Edit">??</a> ?????</li>
                        <li><a href="<%= Url.Action("wopi/postmessage") %>#File_Rename">???</a> ??</li>
                        <li>?? <a href="<%= Url.Action("wopi/postmessage") %>#UI_Sharing">????</a> ?????</li>
                        <li>???? <a href="<%= Url.Action("wopi/postmessage") %>#UI_FileVersions">????</a></li>
                        <li>????<a href="<%= Url.Action("wopi/postmessage") %>#UI_InsertGraphic">????</a></li>
                        <li>Request to <a href="<%= Url.Action("wopi/restapi/putrelativefile") %>#save-as">save</a> a file in a different format</li>
                    </ul>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="file-lock" class="table-header-gray borders copy-link table-style"><h2>???</h2></td>
                <td class="borders">
                    <p>???? <a href="<%= Url.Action("callback") %>#status">????</a> ???,???????????????????????????????????</p>
                </td>
                <td class="borders">
                    <ul>
                        <li>??????online office<a href="<%= Url.Action("wopi/restapi/lock") %>">??</a> ????</li>
                        <li>???????????????? 30 ???<a href="<%= Url.Action("wopi/restapi/refreshlock") %>">???????</a> </li>
                        <li>?? <a href="<%= Url.Action("wopi/restapi/unlock") %>">????</a></li>
                    </ul>
                </td>
            </tr>
            <tr class="tablerow">
                <td id="file-access-rights" class="table-header-gray borders copy-link table-style"><h2>??????
</h2></td>
                <td class="borders">
                    <ul>
                        <li>??</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#edit">??</a></li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#review">??</a> (????????)</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#comment">??</a></li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#fillForms">????</a> (??????)</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#modifyContentControl">??????</a> (????????)</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#modifyFilter">?????</a> (????????)</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#copy">??</a> ????</li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#download">??</a></li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#print">??</a></li>
                        <li><a href="<%= Url.Action("config/document/permissions") %>#rename">???</a></li>
                    </ul>
                </td>
                <td class="borders">
                    <ul>
                        <li>??</li>
                        <li><a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#UserCanWrite">??</a></li>
                        <li><a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#UserCanReview">??</a> (????????)</li>
                        <li><a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#HidePrintOption">??</a></li>
                        <li><a href="<%= Url.Action("wopi/restapi/checkfileinfo") %>#UserCanRename">???</a></li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="mobile-content"></div>
