function contar(){
    let start =     document.getElementById('start')
    let finish =    document.getElementById('finish')
    let jump =      document.getElementById('jump')
    let res =       document.getElementById('res')

    if(start.value.length == 0 || finish.value.length == 0 || jump.value.length == 0){ 
        res.innerHTML = 'Impossível contar.'
        //window.alert('[ERRO] Faltam dados')

    } else {
        res.innerHTML = 'Contando...'
        let s = Number(start.value)
        let f = Number(finish.value)
        let j = Number(jump.value)

        if(j <= 0){
            window.alert('Passo O. Considerando Passo 1')
            j = 1
        }

        if(s < f){
           for (let i = s; i <= f ; i+= j) {
            res.innerHTML += `${i} \u{1F481}`
            }
        } else {
            for (let i = s; i >= f ; i-= j) {
                res.innerHTML += `${i} \u{1F481}`

            } 
        }
        res.innerHTML += ` \u{1F308}`   
    }  
}

