---
order: -1
---

When initializing the SDK frame, a number of events can be passed to the configuration, which will be executed at the appropriate moment:

- [onAppError](#onapperror)
- [onAppReady](#onappready)
- [onAuthSuccess](#onauthsuccess)
- [onCloseCallback](#onclosecallback)
- [onDownload](#ondownload)
- [onEditorCloseCallback](#oneditorclosecallback)
- [onSelectCallback](#onselectcallback)
- [onSignOut](#onsignout)


## onAppError

The function called when SDK is initialized with an error. This error is returned during the initialization.

  **Example**

  ``` javascript
  var onAppError = function () {
      console.log("ONLYOFFICE DocSpace reports an error");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAppError": onAppError,
      },
  });
  ```


## onAppReady

The function called when SDK is initialized successfully.

  **Example**

  ``` javascript
  var onAppReady = function () {
      console.log("ONLYOFFICE DocSpace is ready");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAppReady": onAppReady,
      },
  });
  ```


## onAuthSuccess

The function called upon successful authorization.

  **Example**

  ``` javascript
  var onAuthSuccess = function () {
      console.log("The authorization is successful.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAuthSuccess ": onAuthSuccess,
      },
  });
  ```


## onCloseCallback

The function called only in the [room-selector](../Initialization%20Modes/Room%20Selector/index.md) and [file-selector](../Initialization%20Modes/File%20Selector/index.md) modes when the room or file selector is closed or the selection is canceled.

  **Example**

  ``` javascript
  var onCloseCallback = function () {
      console.log("The room selector is closed.");
  };

  var docSpace = DocSpace.SDK.initRoomSelector({
      "events": {
          "onCloseCallback": onCloseCallback,
      },
  });
  ```


## onDownload

The function called when firing events to download items from the manager. It returns a link to the download object. This event is called only when the [downloadToEvent](../Config/index.md#downloadtoevent) parameter is specified in the config.

  **Example**

  ``` javascript
  var onDownload = function () {
      console.log("The 'New document' file has been downloaded.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onDownload": onDownload,
      },
  });
  ```


## onEditorCloseCallback

The function called when the document editor is closed.

  **Example**

  ``` javascript
  var onEditorCloseCallback = function () {
      console.log("The document editor is closed.");
  };

  var docSpace = DocSpace.SDK.initEditor({
      "events": {
          "onEditorCloseCallback": onEditorCloseCallback,
      },
  });
  ```


## onSelectCallback

The function called only in the [room-selector](../Initialization%20Modes/Room%20Selector/index.md) and [file-selector](../Initialization%20Modes/File%20Selector/index.md) modes when a room or file is selected.

  **Example**

  ``` javascript
  var onSelectCallback = function () {
      console.log("The 'New room' room was selected.");
  };

  var docSpace = DocSpace.SDK.initRoomSelector({
      "events": {
          "onSelectCallback": onSelectCallback,
      },
  });
  ```

  The information about the selected item is returned:

  ``` json
  {
      "icon": "https://example.com/url-to-example-image.svg",
      "id": 34,
      "isSelected": false,
      "label": "roomName"
  }
  ```

  where **example.com** is the name of the server with the ONLYOFFICE DocSpace installed.

  | Parameter  | Description                                          | Type    | Presence |
  | ---------- | ---------------------------------------------------- | ------- | -------- |
  | icon       | Defines the URL to the room/file icon.               | string  | required |
  | id         | Defines the room/file ID.                            | integer | required |
  | isSelected | Specifies whether the current room/file is selected. | boolean | required |
  | label      | Defines the room/file label.                         | string  | required |


## onSignOut

The function called when logging out of the user account.

  **Example**

  ``` javascript
  var onSignOut = function () {
      console.log("The user is logging out of the DocSpace account.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onSignOut ": onSignOut,
      },
  });
  ```
