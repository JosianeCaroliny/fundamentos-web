let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let musica = document.querySelector('#musica')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let musicaOk = false
let assuntoOk = false

nome.style.width = '45%'
email.style.width = '45%'
musica.style.width = '45%'
assunto.style.width = '45%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido :('
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido :D'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido :('
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido :D'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMusica() {
    let txtMusica = document.querySelector('#txtMusica')

    if (musica.value.length > 20) {
        txtMusica.innerHTML = 'Música inválida :('
        txtMusica.style.color = 'red'
    } else {
        txtMusica.innerHTML = 'Música válida :D'
        txtMusica.style.color = 'green'
        musicaOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = 'Palestrinha, ein? Digite no máximo 100 caracteres, meu anjo :)'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && musicaOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente, por favor :)')
    }
}