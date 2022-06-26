// Handle Weather request
function getWeather() {
    let xhr = new XMLHttpRequest();
    // Request to open weather map
    // id=4737316
    url = "http://api.openweathermap.org/data/2.5/weather?lat=45.748&lon=4.847&units=metric&appid=" + apikeyweather
    console.log(url)
    xhr.open(
        "GET",
        url
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                document.getElementById("temp").innerHTML =
                    json.main.feels_like.toFixed(1) + " °C";
                document.getElementById("weather-description").innerHTML =
                    json.weather[0].description;
            } else {
                console.log("error msg: " + xhr.status);
            }
        }
    };
    xhr.send();
}
// Handle writing out Bookmarks
function setupBookmarks() {
    const bookmarkContainer = document.getElementById("bookmark-container");
    bookmarkContainer.innerHTML = bookmarks
        .map((b) => {
            const html = ["<div class='bookmark-set shadow'>"];
            html.push(`<div class="bookmark-title">${b.title}</div>`);
            html.push('<div class="bookmark-inner-container">');
            html.push(
                ...b.links.map(
                    (l) =>
                        `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
                )
            );
            html.push("</div></div>");
            return html.join("");
        })
        .join("");
}

window.onload = () => {
    setupBookmarks();
    getWeather();
};
