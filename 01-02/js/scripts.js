// console.log("Olá mundo")
// console.log('Olá mundo 2')
// console.log(`Olá mundo 3`)

// let nome = 'Beatriz'
// const idade =  25
// var profissao = 'programador'

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(profissao)

// console.log(nome + idade + profissao)
// console.log("Usuário: "+ nome + "Idade:" + idade + "Profissão: " + profissao)

// console.log(`${nome} ${idade} ${profissao}`)
// console.log(`Usuario: ${nome} Idade: ${idade} Profissão: ${profissao}`)

// var idade = parseInt(prompt("Digite sua Idade"))

// alert("Você tem " + idade + " anos")

// var idade2 = idade + 10

// alert("Daqui a 10 anos você terá  " + idade2 + " anos")

// let nome = prompt("Digite seu Nome")
// let sobrenome = prompt("Sobrenome")

// alert(`O nome completo é: ${nome} ${sobrenome}`)

// let idade = parseInt(prompt("idade"))

// if(idade >= 18){
//     alert('Pode Entrar')
// }else{
//     alert('Não pode entrar')
// }
// let idade = parseInt(prompt("idade"))

// if(idade >= 18){
//     alert('Pode Entrar')
// }else if(idade >=15 && idade<18){
//   alert('Pode entrar com os Pais')
// }else{
//     alert('Não pode entrar')
// }

// for (let i = 0; i <= 50; i++){
//     console.log(`o valor do i é: ${i}`);
// }

// let p = 0;

// while (p < 5){
//     console.log(`Repetindo ${p}`)
//     p++
// }

// let g  = 10
// do{
//     console.log(`valor de g: ${g}`)
//     g = g -1
// }while(g > 1)

const trabalho = prompt("digite seu trabalho")

switch(trabalho) {
    case "programador":
    console.log("você gosta de programar!");
    break;
    case "engenheiro":
    console.log("você gosta de cálculo");
    break;
    case "advogado":
    console.log("você gosta de justiça");
    break;
    default:
    console.log("profissão não encontrada");
}