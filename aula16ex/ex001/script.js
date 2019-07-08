let num = document.getElementById('num')
let vetor = document.getElementById('vetor')
let res = document.querySelector('div#res')
let array = []

function add(){
    if (Number(num.value) == '' ||
        Number(num.value) > 100 || 
        Number(num.value) < 1 ||
        array.includes(Number(num.value))) 
    {
        alert('Número inválido ou já adicionado.')
    } else {
        var n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        vetor.appendChild(item)
        array.push(n)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function calcular (){
    if (array.length == 0){
        alert("Adicione números antes de finalizar")
    } else {
        array.sort()
        var maior = array[array.length-1]
        let soma = 0

        for (let i = 0; i < array.length; i++){
            soma += array[i]
        }

        let media = soma/(array.length)

        res.innerHTML = ''
        res.innerHTML += `<p>\n Ao todo temos ${array.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${array[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `A média dos valores digitados é ${media}</p>`
    }

}
