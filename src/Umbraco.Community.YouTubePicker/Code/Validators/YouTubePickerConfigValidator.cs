using System.ComponentModel.DataAnnotations;

namespace Umbraco.Community.YouTubePicker.Code.Validators;

public static class YouTubePickerConfigValidator
{
    public static IEnumerable<ValidationResult> Validate(IDictionary<string, object> configuration)
    {
        if (!configuration.TryGetValue("apiKey", out var apiKeyObj)
            || apiKeyObj is not string apiKey
            || string.IsNullOrWhiteSpace(apiKey))
        {
            yield return new ValidationResult("A YouTube API Key is required.", ["apiKey"]);
        }

        configuration.TryGetValue("start", out var startObj);
        configuration.TryGetValue("end", out var endObj);

        var start = ToInt(startObj);
        var end = ToInt(endObj);

        if (start > 0 && end > 0 && end <= start)
        {
            yield return new ValidationResult("End time must be greater than start time.", ["end"]);
        }
    }

    private static int ToInt(object? value) => value switch
    {
        int i => i,
        long l => (int)l,
        string s when int.TryParse(s, out var n) => n,
        _ => 0
    };
}
