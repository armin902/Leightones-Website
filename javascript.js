function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

const copyright = document.querySelector(".copyright");
copyright.textContent = "© " + updateCopyrightYear().toString() + " The Leightones. All rights reserved.";

