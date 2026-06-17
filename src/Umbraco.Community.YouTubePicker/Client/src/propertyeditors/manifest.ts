export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "YouTube Picker API Key Input",
    alias: "Umbraco.Community.YouTubePicker.ApiKey",
    type: 'propertyEditorUi',
    js: () => import("./api-key.element.js"),
    meta: { label: "YouTube Picker API Key", icon: "icon-info", group: "common" }
  },
  {
    name: "YouTube Picker Start Time Input",
    alias: "Umbraco.Community.YouTubePicker.StartTime",
    type: 'propertyEditorUi',
    js: () => import("./start-time.element.js"),
    meta: { label: "YouTube Picker Start Time", icon: "icon-info", group: "common" }
  },
  {
    name: "YouTube Picker End Time Input",
    alias: "Umbraco.Community.YouTubePicker.EndTime",
    type: 'propertyEditorUi',
    js: () => import("./end-time.element.js"),
    meta: { label: "YouTube Picker End Time", icon: "icon-info", group: "common" }
  },
  {
    name: "Umbraco Community YouTube Picker",
    alias: "Umbraco.Community.YouTubePicker",
    type: 'propertyEditorUi',
    js: () => import("./propertyeditor.element"),
    meta: {
      label: "YouTube Picker",
      icon: "icon-list",
      group: "pickers",
      propertyEditorSchemaAlias: "Umbraco.Community.YouTubePicker.DataEditor",
      settings: {
        properties: [
          {
            alias: "apiKey",
            label: "YouTube API Key",
            description: "Please enter your YouTube API Key",
            propertyEditorUiAlias: "Umbraco.Community.YouTubePicker.ApiKey"
          },
          {
            alias: "channelId",
            label: "YouTube Channel ID",
            description: "The channelId parameter indicates that the API response should only contain resources created by the channel (string)",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "perPage",
            label: "Max Results Per Page",
            description: "The maxResults parameter specifies the maximum number of items that should be returned in the result set. (integer, 0-50)",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          },
          {
            alias: "alloweditors",
            label: "Allow Editors to change Video properties",
            description: "If the parameter is checked, editors will be allowed to change the following properties.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "nocookie",
            label: "No Cookie Embed Player",
            description: "If the parameter is checked, we'll use the https://www.youtube-nocookie.com/ embed link instead.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "rel",
            label: "Related Videos",
            description: "If unchecked, related videos shown after playback will be from the same channel. If checked, related videos may come from any YouTube channel.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "autoplay",
            label: "Autoplay",
            description: "Checking this parameter makes the initial video automatically start to play when the player loads.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "fs",
            label: "Prevent Fullscreen",
            description: "Set the parameter to checked to prevent the fullscreen button from displaying in the player.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "controls",
            label: "Player Controls",
            description: "Uncheck to hide the player controls bar. Controls are shown by default.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "loop",
            label: "Loop",
            description: "Check to loop the video continuously.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "start",
            label: "Start Time (seconds)",
            description: "Start playback at this many seconds into the video. Set to 0 to start from the beginning.",
            propertyEditorUiAlias: "Umbraco.Community.YouTubePicker.StartTime"
          },
          {
            alias: "end",
            label: "End Time (seconds)",
            description: "Stop playback at this many seconds. Set to 0 to play to the end.",
            propertyEditorUiAlias: "Umbraco.Community.YouTubePicker.EndTime"
          },
          {
            alias: "ccLoadPolicy",
            label: "Show Captions",
            description: "Check to show closed captions by default.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          }
        ]
      }
    }
  },
  {
    type: "modal",
    alias: "youtube-picker-modal",
    name: "Youtube Picker Modal",
    element: () => import("./modal.element.js"),
  }
];
