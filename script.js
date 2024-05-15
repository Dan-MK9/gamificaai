// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // se o menu esta fechado
    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu
        menu.classList.remove("menu-fechado")

        // mostrar icone x
        iconeX.style.display = "inline"

        // esconder icones barras
        iconeBarras.style.display = "none"

    } else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // esconder icone x
        iconeX.style.display = "none"

        // mostrar icones barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// função Carrossel 

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

// O codigo que eu fiz kkkk

// const slide1 = () => {
//     banner.classList.remove(slides[slideAtual]);

//     slideAtual = (0);

//     banner.classList.add(slides[slideAtual])
// }

// const slide2 = () => {
//     banner.classList.remove(slides[slideAtual]);

//     slideAtual = (1);

//     banner.classList.add(slides[slideAtual])
// }

// const slide3 = () => {
//     banner.classList.remove(slides[slideAtual]);

//     slideAtual = (2);

//     banner.classList.add(slides[slideAtual])
// }

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        Image: "https://unsplash.it/600/400?image=7",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    },

    {
        Image: "https://unsplash.it/600/400?image=1",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa para gamificação para seu programa de treinamento."
    },

    {
        Image: "https://unsplash.it/600/400?image=126",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo todo do ranking"
    },

    {
        Image: "https://unsplash.it/600/400?image=16",
        descricao: "Uma empresa de saude promove o bem-estar dos funcionarios atraves de um desafio de gamificação de condicionamento fisíco"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings
    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
        <img src="${cardCase.Image}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}