document.addEventListener("scroll", () => {
    // Find elements and define constants
    let heading = document.getElementById("anim-heading");
    let animatedHeaderTexts = document.querySelectorAll("#anim-heading h1");
    const HEADING_HEIGHT = heading.offsetHeight + 300;
    const DOCUMENT_WIDTH = 100; // in vw
    const NATURAL_LEFT = 15; // Natural left value of the headers, in vw;
    // for each header text
    for (let headingText of animatedHeaderTexts) {
        // get how much of the page has been scrolled out of how much needs to be scrolled
        let scrolledRatio = window.scrollY / (0.35 * HEADING_HEIGHT);
        // if the anim-number is odd
        if (["1", "3"].includes(headingText.getAttribute("data-header-anim-number"))) {
            let changeInLeft = -1.5 * scrolledRatio * NATURAL_LEFT;
            var newLeftPos = NATURAL_LEFT + changeInLeft;
            newLeftPos -= 20 * parseInt(headingText.getAttribute("data-header-anim-number")) * scrolledRatio;
        } else { // or even
            var newLeftPos = (NATURAL_LEFT + (scrolledRatio * (DOCUMENT_WIDTH - NATURAL_LEFT)));
            newLeftPos += 20 * parseInt(headingText.getAttribute("data-header-anim-number")) * scrolledRatio;
        }
        // set the position of that header text
        headingText.style.left = newLeftPos + "vw";
    }
        
})
// make the window load to top of page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}