function tabuada () {
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} * ${i} = ${n*i}`
            item.value = `tabuada${i}`
            tabuada.appendChild(item)
        }
    }
}