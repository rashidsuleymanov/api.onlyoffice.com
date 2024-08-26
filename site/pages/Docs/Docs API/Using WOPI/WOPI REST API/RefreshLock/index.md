`POST /wopi/files/(file_id)`

Refreshes the lock on a file by resetting its automatic expiration timer to 30 minutes. This lock will expire automatically after 30 minutes unless it is changed by the [Unlock](../Unlock/index.md) or another *RefreshLock* operations.

This operation works as follows:

1. The WOPI host checks if a file is currently locked or not.
2. If the file is **unlocked**, or if the file is currently **locked** and the **X-WOPI-Lock** value does not match the lock currently on the file, the host must return **409 Conflict** (*"lock mismatch"*) and include the **X-WOPI-Lock** response header containing the value of the current lock on the file. In the case where the file is unlocked, the host must set **X-WOPI-Lock** to the empty string.
3. In the case where the file is locked by a third-party client, hosts should still always include the current lock ID in the **X-WOPI-Lock** response header.

**Parameters**

| Name     | Description                        | Type   |
| -------- | ---------------------------------- | ------ |
| file\_id | The file ID that must be URL safe. | string |

**Query parameters**

| Name          | Description                                                                            | Type   |
| ------------- | -------------------------------------------------------------------------------------- | ------ |
| access\_token | An access token that the host will use to determine whether the request is authorized. | string |

**Request headers**

| Name            | Description                                                          | Type   | Presence |
| --------------- | -------------------------------------------------------------------- | ------ | -------- |
| X-WOPI-Override | The requested operation from the WOPI server (*REFRESH\_LOCK*).      | string | required |
| X-WOPI-Lock     | The lock ID that the host must use to identify the lock on the file. | string | required |

**Response headers**

| Name                     | Description                                                                                                                                                                                                               | Type   | Presence |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| X-WOPI-Lock              | The lock ID identifying the current lock on the file. This header must always be included when responding to the request with **409 Conflict**. It should not be included when responding to the request with **200 OK**. | string | optional |
| X-WOPI-LockFailureReason | The cause of the lock failure. This header may be included when responding to the request with **409 Conflict**. It must only be used for logging purposes.                                                               | string | optional |
