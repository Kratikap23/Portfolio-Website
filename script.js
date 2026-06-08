function toggleDescription(btn) {
    const desc = btn.previousElementSibling;

    if (desc.style.whiteSpace === "normal") {
        desc.style.whiteSpace = "nowrap";
        btn.textContent = "Read More";
    } else {
        desc.style.whiteSpace = "normal";
        btn.textContent = "Show Less";
    }
}
function darkModeBtn(btn) {

    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector("#darkModeBtn i");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}