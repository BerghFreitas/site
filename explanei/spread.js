function sun(x, y, z){
    return x+y+z
}
const num = [ '1',2, 3,]
const num2 = ['bergh', 26, 23]

console.log(sun(...num))    // o spread sao os 3 pontinhos faz com que os 3 argumentos equivalam as 3 propriedades da função
console.log(sun(...num2))