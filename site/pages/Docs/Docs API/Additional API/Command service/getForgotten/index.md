Requests a forgotten file.

**Request example**

``` json
{
  "c": "getForgotten",
  "key": "Khirz6zTPdfd7"
}
```

**Parameters**

| Parameter | Description                                                                       | Type   | Presence |
| --------- | --------------------------------------------------------------------------------- | ------ | -------- |
| c         | Defines the command type.                                                         | string | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string | required |

**Response example**

``` json
{
  "error": 0,
  "key": "Khirz6zTPdfd7",
  "url": "https://documentserver/url-to-forgotten-document.docx"
}
```

**Parameters**

| Parameter | Description                                                                       | Type    | Presence |
| --------- | --------------------------------------------------------------------------------- | ------- | -------- |
| error     | Defines an error code.                                                            | integer | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string  | required |
| url       | Defines the URL to a forgotten file.                                              | string  | required |
