<%@ 
    Control
    Language="C#"
    Inherits="System.Web.Mvc.ViewUserControl"
%>

<div id="tryNew" title="Try the new version of the documentation site">TRY NEW
    <script type="text/javascript">
        $("#tryNew").click(
            function () {
                var d = new Date();
                d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = "X-OO-API=1;" + expires + ";path=/";
                window.location.href = window.location.href.match(/https?\:\/\/[\w\.\:]+/)[0];
            });
    </script>
    <style>
        #tryNew {
            color: red;
            cursor: pointer;
        }
    </style>
</div>
