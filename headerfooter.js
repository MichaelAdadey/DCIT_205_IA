// load-content.js
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    const headerContainer = document.querySelector("header");
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        });

    // Load footer
    const footerContainer = document.querySelector("footer");
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        });
});
