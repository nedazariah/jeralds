function scrollCarousel(dir) {
    const carousel = document.getElementById("category-cards-carousel");
    const card = carousel.querySelector(".category-card");

    const cardW = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

    const scrollAmount = cardW + gap;

    carousel.scrollBy({
        left: dir * scrollAmount,
        behavior: "smooth"
    });
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
