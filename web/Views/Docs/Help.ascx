<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<div class="help-wrapper">
<h3 class="help-title">获取帮助</h3>

<ul class="help-list">
<li>如果您对 ONLYOFFICE Docs 有任何疑问，请先尝试<a href="<%= Url.Action("faq", "editors") %>">常见问题</a>部分。</li>
<li>您可以通过在 <a href="https://github.com/ONLYOFFICE/DocumentServer/issues" target="_blank">GitHub</a> 上发布问题来申请功能或报告错误。</li>
<li>您还可以在 <a href="https://forum.onlyoffice.com/c/document-api/39" target="_blank">ONLYOFFICE 论坛</a> 上询问我们的开发人员（需要注册）。</li>
</ul>
</div>
