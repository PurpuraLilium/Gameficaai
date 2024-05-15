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

// função botão

const selecionarslide = (indice) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indice

    banner.classList.add(slides[indice])
}

// lista cases

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=7",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    },
    {
        imagem: "https://unsplash.it/600/400?image=13",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    },
    {
        imagem: "https://unsplash.it/600/400?image=21",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking."
    },
    {
        imagem: "https://unsplash.it/600/400?image=27",
        descricao: "Uma empresa de sa[ude promove o bem estar dos funcionarios attráves de um desafio de gamificação de condicionamento físico."
    },
]

const renderizarcases = () => {
    let elementolista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardcase => {
        template += ` <div class="card">
            <img src="${cardcase.imagem}" alt="">
            <p>${cardcase.descricao}</p>
            <button>Ver mais</button>
        </div>`
    })

    elementolista.innerHTML = template
}