`POST /wopi/files/(file_id)`

Locks file editing by an online office that requested the lock.

This operation works as follows:

1. The WOPI host checks if a file is currently locked or not.
2. If the file is **unlocked**, the host should lock the file and return **200 OK**.
3. If the file is already **locked** and the **X-WOPI-Lock** value matches the lock currently on the file, the host should refresh the lock timer and return **200 OK**.
4. In all other cases, the host must return **409 Conflict** (*"lock mismatch"*) and include the **X-WOPI-Lock** response header containing the value of the current lock on the file.
5. In the case where the file is locked by a third-party client, hosts should still always include the current lock ID in the **X-WOPI-Lock** response header.

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
| X-WOPI-Override | The requested operation from the WOPI server (*LOCK*).               | string | required |
| X-WOPI-Lock     | The lock ID that the host must use to identify the lock on the file. | string | required |

**Response headers**

| Name                     | Description                                                                                                                                                                                                               | Type   | Presence |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| X-WOPI-Lock              | The lock ID identifying the current lock on the file. This header must always be included when responding to the request with **409 Conflict**. It should not be included when responding to the request with **200 OK**. | string | optional |
| X-WOPI-LockFailureReason | The cause of the lock failure. This header may be included when responding to the request with **409 Conflict**. It must only be used for logging purposes.                                                               | string | optional |
| X-WOPI-ItemVersion       | The file version.                                                                                                                                                                                                         | string | optional |
