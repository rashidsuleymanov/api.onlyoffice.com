---
order: -2
---

Manages review process from an external source.

## How it works

1. When the user clicks the **Accept / Reject** buttons in the custom interface, the [AcceptReviewChanges](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/AcceptReviewChanges.md) / [RejectReviewChanges](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/RejectReviewChanges.md) methods are executed to accept / reject the selected change in the editor:

   ``` javascript
   $("#accept").on("click", function () {
       connector.executeMethod("AcceptReviewChanges");
   });

   $("#reject").on("click", function () {
       connector.executeMethod("RejectReviewChanges");
   });
   ```

2. When the user clicks the arrow buttons in the custom interface, the [MoveToNextReviewChange](/pages/Docs/Plugin%20and%20Macros/Usage%20API/Text%20Document%20API/MoveToNextReviewChange.md) method is executed to move between the next and previous review changes:

   ``` javascript
   $("#prev").on("click", function () {
       connector.executeMethod("MoveToNextReviewChange", [false]);
   });

   $("#next").on("click", function () {
       connector.executeMethod("MoveToNextReviewChange");
   });
   ```

> Please note that the connector is available only for **ONLYOFFICE Developer Edition**.
>
> This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.
