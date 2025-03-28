document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burgerButton");
    const closeMenuButton = document.getElementById("closeMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!burgerButton || !closeMenuButton || !mobileMenu) {
        console.error("HATA: Menü öğeleri bulunamadı!");
        return;
    }

    // Menü açma
    burgerButton.addEventListener("click", function () {
        mobileMenu.classList.add("is-open");
    });

    // Menü kapama
    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
    });
});

