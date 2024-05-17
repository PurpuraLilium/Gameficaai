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

let listaCases = []

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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")

    .then( (resposta) => resposta.json())
    .then( (dados) => {
        listaCases = dados
    


        renderizarcases()
    })
}

// função formulario

const solicitarOrcamento = (event) => {
    // coleta de dados
    let valorNome = document.getElementById("cnome").value

    let valorEmail = document.getElementById("cemail").value

    let valorTexto = document.getElementById("ctxt").value

    // organizar dados

    let dadosform = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorTexto                                                           
    }

    // enviar para api
    fetch("http://localhost:3000/solicitacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosform)
    })
    .then(resposta => {
        console.log(resposta)

        // limpar campos
        document.querySelector("#contato form").reset()

        // mostrar alert sucesso
        alert("Solicitção cadastrada.")

    })
    
    .catch(erro => {
        console.error(erro)

        //  CASO ERRO - mostrar alert
        alert("Erro na requisição")
    })

    event.preventDefault()
}