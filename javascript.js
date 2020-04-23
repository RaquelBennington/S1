/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/

const imagem = document.querySelector('img')
const background = document.body
const h1 = document.querySelector('h1')
const gif = document.querySelector('.imagem')

// const body = document.querySelector('body')

background.style.backgroundColor = "white"

function changeBg() {
  if (background.style.backgroundColor == "white") {
    background.style.backgroundColor = "black"
    h1.innerText = "desligado"
    h1.style.color = "grey"
    gif.src = "https://media.giphy.com/media/Tbm6Is1GdtB28/giphy.gif"
  } else {
    background.style.backgroundColor = "white"
    h1.innerText = "ligado"
    h1.style.color = "grey"
    gif.src = "https://media.giphy.com/media/11TyfGbDbBv4be/giphy.gif"
  }
}

