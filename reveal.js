const reveal = document.querySelectorAll(".reveal")

// Why choose card staggered reveal. Start
const cards = document.querySelectorAll(".why-choose-card");

cards.forEach((card, index, cards) => {
    if(cards[index] === 0){
        card.style.transitionDelay = "0s"
    }else{
        card.style.transitionDelay = `${index * 0.1}s`;
    }
});
// stop

window.addEventListener("scroll", revealItem)

function revealItem(){
    reveal.forEach((element) => {
        const position = element.getBoundingClientRect()
        if(element.classList.contains("up") && position.top < window.innerHeight * 0.85){
            element.classList.add("show")
        }else if (element.classList.contains("fade-in") && position.top < window.innerHeight * 0.85){
            element.classList.add("show")
        }
    })
}

revealItem()