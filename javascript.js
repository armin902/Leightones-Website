function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

const copyright = document.querySelector(".copyright");
copyright.textContent = "© " + updateCopyrightYear().toString() + " The Leightones. All rights reserved.";

const buttonScrollTop = document.querySelector(".scroll-to-top");


buttonScrollTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});


document.addEventListener("scroll", () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const halfwayPoint = window.innerHeight * 0.5;
    if(currentScroll > halfwayPoint) {
        buttonScrollTop.style.display = "block";
    } else {
        buttonScrollTop.style.display = "none";
    }
});
