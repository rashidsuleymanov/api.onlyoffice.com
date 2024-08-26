Forcibly saves the document being edited without closing it. The document editing might be continued after this command, so this will not be the final saved document version.

**Request example**

``` json
{
  "c": "forcesave",
  "key": "Khirz6zTPdfd7",
  "userdata": "sample userdata"
}
```

**Parameters**

| Parameter | Description                                                                                                       | Type   | Presence |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| c         | Defines the command type.                                                                                         | string | required |
| key       | Defines the document identifier used to unambiguously identify the document file.                                 | string | required |
| userdata  | Defines some custom identifier which will help distinguish the specific request in case there were more than one. | string | optional |

**Response example**

``` json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

**Parameters**

| Parameter | Description                                                                       | Type    | Presence |
| --------- | --------------------------------------------------------------------------------- | ------- | -------- |
| error     | Defines an error code.                                                            | integer | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string  | required |
