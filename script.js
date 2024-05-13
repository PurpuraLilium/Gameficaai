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
