<%@ 
    Control
    Language="C#"
    Inherits="System.Web.Mvc.ViewUserControl"
%>

<div class="try-new-block">
    <a id="tryNew" class="button active" style="padding: 10px 20px;">TRY NEW VERSION</a>
    <script type="text/javascript">
        $("#tryNew").click(
            function () {
                var d = new Date();
                d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = "X-OO-API=1;" + expires + ";path=/";
                window.location.href = window.location.href.match(/https?\:\/\/[\w\.\:]+/)[0];
            }
        );
    </script>
</div>
