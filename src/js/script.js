function runOnScroll() {
    const header = document.getElementById("header-fixed");

    if (document.documentElement.scrollTop > 30) {
        header.classList.add("header_scrolled");

    } else {
        header.classList.remove("header_scrolled");
    }
};
window.addEventListener("scroll", runOnScroll);