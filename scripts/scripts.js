let linkCursorElements = document.querySelectorAll("section.landing-link a, .info-banner img#info-image");
let body = document.getElementsByTagName("body")[0];
let linkCursorElement = document.createElement("div");
linkCursorElement.textContent = "follow this link";

for (let linkCursorElement of linkCursorElements) {
    linkCursorElement.addEventListener("mouseover" () => {
        console.log("finish this");
    })
}