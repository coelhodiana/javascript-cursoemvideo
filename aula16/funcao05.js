// Cálculo fatorial recursivo

function fat (num){
   if(num == 1){
       return 1
   } else {
        return num * fat(num-1)
   }
}

console.log(fat(5))