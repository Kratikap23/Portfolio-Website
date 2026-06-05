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
