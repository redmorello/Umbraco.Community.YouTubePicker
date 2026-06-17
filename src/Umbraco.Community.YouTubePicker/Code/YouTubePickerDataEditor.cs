using System.ComponentModel.DataAnnotations;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Community.YouTubePicker.Code.Validators;

namespace Umbraco.Community.YouTubePicker.Code;

[DataEditor("Umbraco.Community.YouTubePicker.DataEditor", ValueEditorIsReusable = true)]
public class YouTubePickerDataEditor : DataEditor
{
    public YouTubePickerDataEditor(IDataValueEditorFactory dataValueEditorFactory)
        : base(dataValueEditorFactory)
    {
    }

    protected override IConfigurationEditor CreateConfigurationEditor()
        => new YouTubePickerConfigurationEditor();

    private sealed class YouTubePickerConfigurationEditor : ConfigurationEditor
    {
        public override IEnumerable<ValidationResult> Validate(IDictionary<string, object> configuration)
            => YouTubePickerConfigValidator.Validate(configuration);
    }
}
