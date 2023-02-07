const cards = document.querySelectorAll(".cards");

cards.forEach(cards => {
    cards.addEventListener("click", () => {
        removeActiveClass();
        cards.classList.add("active");
    })
})

function removeActiveClass() {
    cards.forEach(cards => {
        cards.classList.remove("active");
    })
}