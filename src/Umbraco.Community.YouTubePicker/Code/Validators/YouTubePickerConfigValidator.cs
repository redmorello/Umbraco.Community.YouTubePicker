using System.ComponentModel.DataAnnotations;
using Umbraco.Cms.Core.Models.Validation;
using Umbraco.Cms.Core.PropertyEditors;

namespace Umbraco.Community.YouTubePicker.Code.Validators;

public class YouTubePickerConfigValidator : IValueValidator
{
    public IEnumerable<ValidationResult> Validate(object? value, string? valueType, object? dataTypeConfiguration,
        PropertyValidationContext validationContext)
    {
        throw new NotImplementedException();
    }
}
