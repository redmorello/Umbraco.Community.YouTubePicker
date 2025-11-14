const e = [
  {
    name: "Umbraco Community YouTube Picker",
    alias: "Umbraco.Community.YouTubePicker",
    type: "propertyEditorUi",
    js: () => import("./propertyeditor.element-BJMvN_sF.js"),
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
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
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
            description: "If the parameter is unchecked, then related videos will come from the same channel as the video that was just played. If the parameter is checked, then the player shows related videos from YouTube.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "modestbranding",
            label: "Modest Branding",
            description: "Set the parameter to checked to prevent the YouTube logo from displaying in the control bar.",
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
          }
        ]
      }
    }
  },
  {
    type: "modal",
    alias: "youtube-picker-modal",
    name: "Youtube Picker Modal",
    element: () => import("./modal.element-DchFO-bi.js")
  }
], t = [
  ...e
];
export {
  t as manifests
};
//# sourceMappingURL=umbraco-community-you-tube-picker.js.map
