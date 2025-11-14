using Umbraco.Cms.Core.Models;
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

    protected override IDataValueEditor CreateValueEditor()
        => DataValueEditorFactory.Create<YouTubePickerDataValueEditor>(Attribute!);
}
