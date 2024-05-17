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

let listaCases = [] 

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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then ( (dados) => {
        console.log(dados);
        listaCases = dados
        renderizarCases()
    })
}

const solicitarOrcamento = (event) => {
    // pegar valores dos inputs

    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // console.log(valorNome);
    // console.log(valorEmail);
    // console.log(valorDescricao);

    // organizar objeto com os valores

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // enviar requisição para a api

    // 127.0.0.1 -> localhost
    // Método HTTP POST - Create -> Cadastrar ou criar
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // limpar campos (inputs)
        document.querySelector("#contato form").reset()

        // mostrar alert com mensagem de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.error(erro)

        // CASO ERRO - alert com msg de erro
        alert("Erro na requisição")
    })

    event.preventDefault()
}