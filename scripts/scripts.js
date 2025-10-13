if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("DOMContentLoaded", () => {
        // define the linkCursorElements (elements that need the thing activate), body element, and the link Cursor div (the thing that moves)
        var linkCursorElements = document.querySelectorAll("section.landing-link a, .info-banner a:has(img#info-image)");
        var body = document.getElementsByTagName("body")[0];
        var linkCursor = document.createElement("div");

        // set attributes of the cursor for the lonks
        linkCursor.textContent = "click to follow this link";
        linkCursor.id = "linkCursor";
        linkCursor.style.display = "none";
        linkCursor.style.position = "fixed";
        linkCursor.style.color = "var(--theme-accent)";
        linkCursor.style.pointerEvents = "none";
        linkCursor.style.fontWeight = "800";
        linkCursor.style.padding = "0.3em 0.3em 0.5em 0.3em";
        linkCursor.style.borderRadius = "1.5em";
        linkCursor.style.backgroundColor = "var(--theme-text-bg)"


        
        // add the link cursor to the body
        body.appendChild(linkCursor);
        
        // for every element that uses the link cursor
        for (let linkCursorElement of linkCursorElements) {
            // listen for mouse entering
            linkCursorElement.addEventListener("mouseover", () => {
                // get link cursor element
                let linkCursor = document.getElementById("linkCursor");
                let targetHref = linkCursorElement.href;
                targetHref = targetHref.split('/');
                let targetLocalHref = targetHref.at(-1); // m u s i c . h t m l
                linkCursor.textContent = "click to follow link to " + targetLocalHref.slice(0, targetLocalHref.length - 5);
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
        document.addEventListener("mousemove", (event) => {
            // get the link cursor element
            let linkCursor = document.getElementById("linkCursor");
            // get the mouse location
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            // set the link curser location
            linkCursor.style.left = mouseX + 'px';
            linkCursor.style.top = mouseY + 'px';''
        })

        document.addEventListener("mousemove", (event, linkCursorElements) => {
            // get the link cursor
            let linkCursor = document.getElementById("linkCursor");
            // get the mouse location
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            // iterate through link cursor elements to find if the cursor is over one
            for (let linkCursorElement of linkCursorElements) {
                let area = linkCursorElement.getBoundingClientRect();
                let areaX = area["x"];
                let arexY = area["y"];
                let areaBottom = area["bottom"];
                let areaRight = area["right"];
                    
            }

    })
    })
}