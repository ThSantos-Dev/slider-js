'use strict'

const imagens = [
    {id: '1', url: './img/angular.png'},
    {id: '2', url: './img/react.png'},
    {id: '3', url: './img/vue.jpg'},
    {id: '4', url: './img/svelte.jpg'},
    {id: '5', url: './img/flor.webp'}
]

const criarAnterior = () => {
        // Span e Icone - Anterior
        const anteriorButton = document.createElement('span')
        const anteriorIcone = document.createElement('i')
        anteriorButton.classList.add('slider-button')
        anteriorButton.id = 'btnAnterior' 
        anteriorIcone.classList.add('fa-solid')
        anteriorIcone.classList.add('fa-arrow-left')
        anteriorButton.appendChild(anteriorIcone)

        return anteriorButton
}

const criarProximo = () => {
        // Span e Icone - Proximo
        const proximoButton = document.createElement('span')
        const proximoIcone = document.createElement('i')
        proximoButton.classList.add('slider-button')
        proximoButton.id = 'btnProximo' 
        proximoIcone.classList.add('fa-solid')
        proximoIcone.classList.add('fa-arrow-right')
        proximoButton.appendChild(proximoIcone)
    
        return proximoButton
}

const criarSliderItems = () => {
    // Div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')
    const slides = imagens.map(item => 
        `<div class="slider-item">
            <img src="${item.url}" alt="">
        </div>`
    )

    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}

const criarSlider = (imagens) => {
    const slider = document.querySelector('.slider')

    // Inserindo os OBJETOS HTML no DOM
    slider.appendChild(criarAnterior())
    slider.appendChild(criarSliderItems())
    slider.appendChild(criarProximo())
}

criarSlider(imagens)



const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')
console.log(sliderItems)

const proximoItem = () => {
    // Pegando o primeiro item 
    const primeiroItem = sliderItems[0]
    // Reordenando o item
    sliderItemContainer.appendChild(primeiroItem)

    sliderItems = document.querySelectorAll('.slider-item')
}

const anteriorItem = () => {
    const ultimoItem = sliderItems[sliderItems.length -1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

document.getElementById('btnProximo')
    .addEventListener('click', proximoItem)

document.getElementById('btnAnterior')
    .addEventListener('click', anteriorItem)

setInterval(proximoItem, 3000)
