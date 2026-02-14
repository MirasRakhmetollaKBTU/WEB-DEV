  const glassMain = document.querySelector(".glass-main");

  function setSpotlight(event) {
    const rect = glassMain.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const cx = Math.max(0, Math.min(100, x));
    const cy = Math.max(0, Math.min(100, y));

    glassMain.style.setProperty("--mx", `${cx}%`);
    glassMain.style.setProperty("--my", `${cy}%`);
}

glassMain.addEventListener("mousemove", setSpotlight);
glassMain.addEventListener("mouseenter", setSpotlight);

glassMain.addEventListener("mouseleave", () => {
    glassMain.style.setProperty("--mx", "50%");
    glassMain.style.setProperty("--my", "30%");
});

