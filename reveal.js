const reveal = document.querySelectorAll(".reveal")

// Transition delay for grid. Staggered reveal
const stagger = document.querySelectorAll(".stagger");

stagger.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Reveal on scroll
window.addEventListener("scroll", revealItem)

function revealItem(){
    reveal.forEach((element) => {
        const position = element.getBoundingClientRect()
        if(element.classList.contains("up") && position.top < window.innerHeight * 0.9){
            element.classList.add("show")
        }else if (element.classList.contains("fade-in") && position.top < window.innerHeight * 0.85){
            element.classList.add("show")
        }
    })
}

revealItem()