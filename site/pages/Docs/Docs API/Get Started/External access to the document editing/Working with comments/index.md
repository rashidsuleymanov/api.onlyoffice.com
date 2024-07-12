---
order: -3
---

Collects all the comments from the document and displays them in the custom interface.

## How it works

1. When the user opens a document, the [GetAllComments](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/GetAllComments.md) method is executed to collect all the comments from the document and display them in the custom interface. The following comment data is displayed: the comment author, the time when the comment was posted, the comment text, and the comment replies:

   ``` javascript
   var comments = [];

   var onDocumentReady = function () {
       window.connector = docEditor.createConnector();

       connector.executeMethod("GetAllComments", null, function (data) {
           comments = data;
       });

   }
   ```

2. When the user clicks the **Add comment** button in the custom interface, the [AddComment](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/AddComment.md) method is executed to add a new comment to the document. After this method is called, the [onAddComment](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Common%20API/Events/onAddComment.md) event is fired to add a new comment to an array with all the document comments:

   ``` javascript
   var onDocumentReady = function () {
       connector.attachEvent("onAddComment", function (val) {
           var index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index == -1) {
               comments = [val, ...comments];
           }
       });
   }

   $("#addComment").on("click", function () {

       var comment = $("#addCommentArea").val();

       if (Boolean(comment)) {
           var currentdate = Date.now();
           var datetime = "" + currentdate;

           connector.executeMethod("AddComment", [{ 
                   Text: comment, 
                   UserName: "John Smith", 
                   Time: datetime 
               }]
           );
       }
   });
   ```

3. When the user clicks the **Remove comment** button in the custom interface, the [RemoveComments](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/RemoveComments.md) method is executed to remove a comment from the document. After this method is called, the [onRemoveComment](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Common%20API/Events/onRemoveComment.md) event is fired to remove a comment from an array with all the document comments:

   ``` javascript
   var onDocumentReady = function () {

       connector.attachEvent("onRemoveComment", function (val) {
           const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index !== -1) {
               comments.splice(index, 1);
           }

       });

   }

   $("#deleteComment").on("click", function () {

       connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);

   });
   ```

4. When the user clicks the arrow buttons in the custom interface, the [MoveToComment](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/MoveToComment.md) method is executed to move between the comments in the document:

   ``` javascript
   connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);
   ```

5. When the user clicks the **Add reply** button in the custom interface, the [ChangeComment](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/ChangeComment.md) method is executed to add a reply to the existing comment by changing the *CommentData* object. After this method is called, the [onChangeCommentData](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Common%20API/Events/onChangeCommentData.md) event is fired to add a new comment reply to an array with all the document comments:

   ``` javascript
   var onDocumentReady = function () {

       connector.attachEvent("onChangeCommentData", function (val) {
           const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index !== -1) {
               comments[index]["Data"] = val["Data"];
           }
       });

   }

   $("#addReply").on("click", function () {

       var reply = $("#addReplyArea").val();

       if (Boolean(reply)) {
           var currentdate = Date.now();
           var datetime = "" + currentdate;

           comments[indexComment]["Data"]["Replies"].push({
               Text: reply
               Time: datetime,
               UserName: "John Smith"
           });

           connector.executeMethod(
               "ChangeComment", 
               [comments[indexComment]["Id"],
               comments[indexComment]["Data"]]
           );
       }
   });
   ```

> Please note that the connector is available only for **ONLYOFFICE Developer Edition**.
>
> This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.
