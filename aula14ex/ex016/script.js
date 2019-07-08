 start =     document.getElementById('start')
 finish =    document.getElementById('finish')
 jump =      document.getElementById('jump')
 res =       document.getElementById('res')

function validar(){
    //Validações
    if(start.value == '' || start.value == null){
       res.innerHTML += `Impossível contar. Digite um número no campo início.`
    } else if (finish.value == '' || finish.value == null){
        res.innerHTML += `Impossível contar. Digite um número no campo fim.`
    } else if(jump.value == 0 || jump.value == null){
        alert('Passo inválido. Considerando PASSO igual a 1')
        jump.value = 1
    } 
}

function contar(){
    validar()
    // lógica
    for ( i = Number(start.value); i <= Number(finish.value) ; i+= Number(jump.value)) {
        res.innerHTML += `${i} `
    }
}

