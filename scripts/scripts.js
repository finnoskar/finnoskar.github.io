document.addEventListener("DOMContentLoaded", () => {
    // define the linkCursorElements (elements that need the thing activate), body element, and the link Cursor div (the thing that moves)
    var linkCursorElements = document.querySelectorAll("section.landing-link a, .info-banner img#info-image");
    var body = document.getElementsByTagName("body")[0];
    var linkCursor = document.createElement("div");

    // set attributes of the cursor for the lonks
    linkCursor.textContent = "follow this link";
    linkCursor.id = "linkCursor";
    linkCursor.style.display = "none";
    linkCursor.style.position = "fixed";
    linkCursor.style.color = "var(--theme-accent)";
    linkCursor.style.fontWeight = "800";
    
    // add the link cursor to the body
    body.appendChild(linkCursor);

    // for every element that uses the link cursor
    for (let linkCursorElement of linkCursorElements) {
        // listen for mouse entering
        linkCursorElement.addEventListener("mouseenter", () => {
            // get link cursor element
            let linkCursor = document.getElementById("linkCursor");
            // hide cursor and show link cursor
            linkCursorElement.style.cursor = "none";
            linkCursor.style.display = "inline-block";
    
        })
        // listen to mouse leaving
        linkCursorElement.addEventListener("mouseleave", () => {
            // get link cursor element
            let linkCursor = document.getElementById("linkCursor");
            // make cursor visible and hide the link cursor
            linkCursorElement.style.cursor = "auto";
            linkCursor.style.display = "none";
        })
    }
    // listen for mouse movement
    document.addEventListener("mousemove", function(event) {
        // get the link cursor element
        let linkCursor = document.getElementById("linkCursor");
        // get the mouse location
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        // set the link curser location
        linkCursor.style.left = mouseX + 'px';
        linkCursor.style.top = mouseY + 'px';''
    })
})
