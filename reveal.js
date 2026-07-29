const reveal = document.querySelectorAll(".reveal")

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