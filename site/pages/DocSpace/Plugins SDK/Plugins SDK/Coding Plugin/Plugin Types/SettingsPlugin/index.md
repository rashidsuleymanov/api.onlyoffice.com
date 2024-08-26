---
order: -8
---

The plugin that manages settings for the administrator or owner.

**Interface**: ISettingsPlugin.

<img alt="Plugin settings" src="/assets/images/docspace/settings-block.png" width="260px">

## Variables

### adminPluginSettings

Stores the administrator or owner settings block that is embedded in the modal window with the plugin description.

Type: [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)

## Methods and their description

### setAdminPluginSettings

Update the administrator or owner plugin settings.

**Parameters**

| Name                | Description                                                                                                         | Type      | Example |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| adminPluginSettings | Defines the administrator or owner settings block that is embedded in the modal window with the plugin description. | ISettings |         |

### setAdminPluginSettingsValue

Transfer the administrator or owner plugin settings to all the portal users. It functions on the DocSpace side.

**Parameters**

| Name     | Description                                                                                                               | Type   | Example |
| -------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| settings | Defines a parameter that is used to save and transfer the administrator or owner plugin settings to all the portal users. | string |         |

### getAdminPluginSettings

Get the administrator or owner plugin settings.

**Example**

``` typescript
import {type ISettings, type ISettingsPlugin} from "@onlyoffice/docspace-plugin-sdk"

class Plugin implements ISettingsPlugin {
  adminPluginSettings: ISettings | null = {} as ISettings

  getAdminPluginSettings = () => {
    return this.adminPluginSettings
  }

  setAdminPluginSettings = (settings: ISettings | null): void => {
    this.adminPluginSettings = settings
  }

  setAdminPluginSettingsValue = (settings: string | null): void => {}
}
```
