using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Strings;
using Umbraco.Community.YouTubePicker.Code.Validators;

namespace Umbraco.Community.YouTubePicker.Code;

public class YouTubePickerDataValueEditor : DataValueEditor
{
    public YouTubePickerDataValueEditor(
        IShortStringHelper shortStringHelper,
        IJsonSerializer jsonSerializer,
        IIOHelper ioHelper,
        DataEditorAttribute attribute)
        : base(shortStringHelper, jsonSerializer, ioHelper, attribute)
        => Validators.Add(new YouTubePickerValueValidator());
}
