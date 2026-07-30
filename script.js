// Hamburger Menu JS
const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

hamburger.addEventListener("click", () => {
    navList.style.left = "0"
    document.body.classList.add("no-scroll")
})

navList.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-arrow-right-from-bracket") || e.target.classList.contains("nav-link")){
        navList.style.left = "-100%"
        document.body.classList.remove("no-scroll")
    }
})