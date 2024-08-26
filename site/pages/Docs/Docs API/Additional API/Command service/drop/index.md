Disconnects the users with the identifiers specified in the *users* parameter from the **document editing service**. These users will be able to view the document, but will not be allowed to make changes to it.

**Request example**

``` json
{
  "c": "drop",
  "key": "Khirz6zTPdfd7",
  "users": ["6d5a81d0"]
}
```

**Parameters**

| Parameter | Description                                                                       | Type             | Presence |
| --------- | --------------------------------------------------------------------------------- | ---------------- | -------- |
| c         | Defines the command type.                                                         | string           | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string           | required |
| users     | Defines the list of the user identifiers.                                         | array of strings | required |

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
