document.addEventListener("scroll", () => {
    // Find elements and define constants
    let heading = document.getElementById("heading");
    let animatedHeaderTexts = document.querySelectorAll("#heading h1");
    const HEADING_HEIGHT = heading.offsetHeight + 300;
    const DOCUMENT_WIDTH = 100; // in vw
    const NATURAL_LEFT = 15; // Natural left value of the headers, in vw;

    for (let headingText of animatedHeaderTexts) {
        let scrolledRatio = window.scrollY / (0.35 * HEADING_HEIGHT);
        if (["1", "3"].includes(headingText.getAttribute("data-header-anim-number"))) {
            let changeInLeft = -1.5 * scrolledRatio * NATURAL_LEFT;
            var newLeftPos = NATURAL_LEFT + changeInLeft;
                if (window.scrollY > 0) {
                newLeftPos -= 5 * parseInt(headingText.getAttribute("data-header-anim-number")) * scrolledRatio;
            }
        } else {
            var newLeftPos = (NATURAL_LEFT + (scrolledRatio * (DOCUMENT_WIDTH - NATURAL_LEFT)));
            if (window.scrollY > 0) {
                newLeftPos += 5 * parseInt(headingText.getAttribute("data-header-anim-number")) * scrolledRatio;
            }
        }
        headingText.style.left = newLeftPos + "vw";
    }
})
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}