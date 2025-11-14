@ECHO OFF
:: This file can now be deleted!
:: It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

:: set up git
git init
git branch -M main
git remote add origin https://github.com/redmorello/Umbraco.Community.YouTubePicker.git

:: ensure latest Umbraco templates used
dotnet new install Umbraco.Templates --force

:: use the umbraco-extension dotnet template to add the package project
cd src
dotnet new umbraco-extension -n "Umbraco.Community.YouTubePicker" --site-domain "https://localhost:44386" --include-example --allow-scripts Yes

:: replace package .csproj with the one from the template so has nuget info
cd Umbraco.Community.YouTubePicker
del Umbraco.Community.YouTubePicker.csproj
ren Umbraco.Community.YouTubePicker_nuget.csproj Umbraco.Community.YouTubePicker.csproj

:: add project to solution
cd..
dotnet sln add "Umbraco.Community.YouTubePicker"

:: add reference to project from test site
dotnet add "Umbraco.Community.YouTubePicker.TestSite/Umbraco.Community.YouTubePicker.TestSite.csproj" reference "Umbraco.Community.YouTubePicker/Umbraco.Community.YouTubePicker.csproj"
