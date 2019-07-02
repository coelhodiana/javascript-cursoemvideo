function carregar (){
    var msg =   window.document.getElementById('msg')
    var img =   window.document.getElementById('imagem')
    var data =  new Date()
    var hora =  data.getHours() + ":" + data.getMinutes()
    // var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#b89e90'
        msg.innerHTML +='<p>Bom dia!</p>'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#173842'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#1b1b1b'
        msg.innerHTML += '<p>Boa noite, Senhora!</p>'
    }
}
