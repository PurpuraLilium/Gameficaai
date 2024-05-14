let menu = document.getElementById("menu")
let barras = document.getElementById("icon-barra")
let xis = document.querySelector("#icon-x")

function AbrirFechar(){
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado")

        xis.style.display = "inline"

        barras.style.display = "none"
    }
    else{
        menu.classList.add("menu-fechado")

        xis.style.display = "none"

        barras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
    xis.style.display = "inline"
    barras.style.display = "none"
}

// função carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0
let numSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximo = () => {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual < numSlides - 1){
        slideAtual++
    }
    else{
        slideAtual= 0
    }
    banner.classList.add(slides[slideAtual])

   
}

const mostrarAnterior = () => {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0){
        slideAtual--
    }
    else{
        slideAtual= numSlides - 1
    }
    banner.classList.add(slides[slideAtual])

}
