let num = [5,8,2,9,3]
num.push(6)

console.log(num)
console.log(num.length)
console.log(num.sort())
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log('==========================')

for (let i in num) {
    console.log(num[i])
}

console.log('==========================')

let index = num.indexOf(8)
if (index == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${index}`)
}

