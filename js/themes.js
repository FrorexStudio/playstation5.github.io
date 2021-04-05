var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
var logo = document.getElementById("darklogo");
var footlogo = document.getElementById("footerdarklogo");

btn.addEventListener("click", function() { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "css/roots/root.css";
    let darkTheme = "css/roots/root-dark.css";
    let whiteLogo = "img/logo/logo-white.png";
    let blackLogo = "img/logo/logo.png";
    let footwhiteLogo = "img/logo/PS5_logo_white.png";
    let footblackLogo = "img/logo/PS5_logo.png";

    var currTheme = link.getAttribute("href");
    var currLogo = logo.getAttribute("src");
    var currFootLogo = footlogo.getAttribute("src");
    var theme = "";

    if (currTheme == lightTheme) {
        currLogo = whiteLogo
        currFootLogo = footwhiteLogo
        currTheme = darkTheme;
        theme = "dark";
    } else {
        currLogo = blackLogo;
        currFootLogo = footblackLogo;
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);
    logo.setAttribute('src', currLogo);
    footlogo.setAttribute('src', currFootLogo);

    Save(theme);
}