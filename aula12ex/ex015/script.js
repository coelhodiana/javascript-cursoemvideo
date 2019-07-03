function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formYear = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formYear.value.length == 0 || Number(formYear.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formYear.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //cliança
                img.setAttribute('src', 'img/bebe-homem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-homem.png')
            }
        } else if (formSex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //cliança
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulta-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }

}