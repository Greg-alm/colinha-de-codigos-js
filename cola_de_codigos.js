//1-exiba a mensagem "Ola mundo" no console.
console.log("Ola mundo");
//2-crie uma variavel com seu nome e exiba o valor no console.
let nome= "gregory";
console.log(nome);
//3-some dois numeros e exiba o resultado

let numero1= 1;
let numero2 = 2;

let somar = numero1 + numero2;
console.log(somar);


//forma do professor

let soma = 10+5;
console.log(soma);

//4-subtraia dois numeros e exiba o valor
let soma2 = 10-5;
console.log(soma2);

//5-descubra o resto da divisão de um numero por outro
let resto = 10 % 3;
console.log(resto);

//6-crie uma variavel booleana(true false) e exiba seu valor

let estaChovendo = true;
console.log(estaChovendo);

//7- verifique se um numero é maior que outro e exiba o resultado

n1= 2;
n2=7;
if(n1<n2){
    console.log("menor")
};

//jeito do professor
let maiorQue = 18 > 21;
console.log(maiorQue);

//8-Crie 2 variaveis e exiba a concatenação

let vari1 = "teste1";

let vari2  = "teste2";

console.log(`mostrar ${vari1} ${vari2}`);

//9-descubra o tipo de uma variavel
let valor = 100;
console.log(typeof valor); //typeofvmostra o tipo da variavel

//10-converta numero para string

let num = 50;
console.log(String(num));

//11- string para numero

let texto = "teste";
console.log(Number(texto));



//                             LAÇOS DE REPETIÇÃO

//12-exiba no console numero de 0 a 10

for(let i =0; i<=10; i++){
    console.log(i);
}

//13-exiba apenas numeros pares até 20
for(let i =0; i<=20; i+=2){
    console.log(i);
}
//14-mostre no console numeros de 10 ate 1
for(let i =10; i>=1; i--){
    console.log(i);
}

//15- some numero de 1 a 5
n1 = 1,n2 = 2,n3 = 3,n4 = 4,n5 = 5
let a = n1+n2+n3+n4+n5;
console.log(a);

//jeito do professor
let somaLoop = 0;
for(let i=1; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i"+i+"valor de loop"+somaLoop);
}
console.log(somaLoop);

//16- faça a tabuada do 3
for(let i =0; i<=30; i+=3){
    console.log(i);
}
//17.Conte quantos números são maiores que 5.
let lista = [2,6,8,1,3];
let cont = 0;
for(let i=0; i<lista.length; i++){
    if(lista[i]>5)cont++;

}
console.log(cont);

//18.Percorra a string letra por letra.
let palavra = "JFRS";
for(let i=0; i<palavra.length; i++){
    console.log(palavra[i]);
};

//19.Pare um loop quando encontrar o número 7 de 0 a 10.
for(i=0; i<=10; i++){
    if(i === 8)break;
    console.log(i);
};

//20. Crie uma função que exibe uma mensagem
function menssagem(){
    console.log("Olá");
}
menssagem();

//21. Crie uma função que multiplica 2 numeros
function multiplicacao(a,b){
    return a * b;
}
console.log(multiplicacao(2,3));

//22. Crie uma funcao que verifica se é par ou impar
function analise(num){
return num % 2===0 ? "par" :"impar";

}
console.log(analise(11))

//23. Crie uma função que retorne o dobro
function Dobro(a){
    return 2 * a;
};
console.log(Dobro(5));

//24. Crie uma função que some elementos de um array.
function soma_array(arr){
    total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    };
    return total;

}
console.log(soma_array([2,5,6]));

//====================== ATIVIDADES COM IF =====================================

//11. Verifiqque se o número 15 é positio e exiba uma mensagem
let numero = 15;
if (numero > 0){
    console.log("Positio");
}
else{
    console.log("Negativo");
};

//12. Verifique se uma pessoa com 17 ano é maior de idade
let idade = 17;
if(idade<=18){
    console.log("Menor de idade")
}
else{
    console.log("Maior de idade")
};

//==================== ATIVIDADES COM ARRAY ===================================

//31.Crie um array com os numeros 10, 20, 30, 40 e exiba todos.
let numeros1 = [10, 20, 30, 40];
console.log(numeros1);

for(let i=0;i<numeros1.length;i++){
    console.log(numeros1[i])
};

//32. Crie um array com 5 frutas e exiba a primeira fruta.
let frutas = ["banana", "maça", "abacate", "mamão", "manga"];
console.log(frutas[0]);

//33. Adicione o número 50 no final o array [10,20,30,40].
let numeros2 = [10,20,30,40];
numeros2.push(50);
console.log(numeros2);

//34. Remova o último elemento do array [1, 2, 3, 4, 5].
let arr2 = [1, 2, 3, 4, 5];
arr2.pop()
console.log(arr2);

//35. Exiba quantos elementos tem no array [5, 10, 15, 20].
let arr3 = [5, 10, 15, 20];
console.log(arr3.length);

//36. Some todos os números do array [2, 4, 6, 8].
let ValoresArray = [2, 4, 6, 8];
SomaArray = 0;
for(let i=0;i<ValoresArray.length;i++){
    SomaArray += ValoresArray[i];
   
};
console.log(SomaArray);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                           TERNARIO

/*============================================
Colégio Antonio de Moraes Barros
Professor; Edson F Alves
Curso técnico:
10 EXERCÍCIOS COM OPERADOR TERNÁRIO
Instrução: Resolva usando operador ternário (? :)
============================================*/

/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/
let numeroo = 5;
let resultado = numeroo > 0 ? "positivo" : "negativo";
console.log(`O numero ${numeroo} é ${resultado}`)
/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/
let Idade = 17;
let voto = Idade >= 16 ? "pode votar" : "não pode votar";
console.log(`Carlos ${voto}`)

// jeito do professor

let idade2 = 17;
let voto2 = idade2 >= 16 ? "pode votar" : "não pode votar";
console.log(`Com ${idade2} anos: ${voto2}`)


/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/
let number = 2;
let resu = number % 2 ===0 ?  "Par" :  "Impar";
console.log(`${number} é: ${resu}`)


/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/
let acesso = 2717;
let verificacao = acesso ==2707  ?  "acessado pelo ADM" :  "acesso NEGADO";
console.log(`maquina  ${verificacao}`)


//jeito do professor
let nivel = "admin";
let acesso2 = nivel ==="admin" ? "acesso total":"acesso restringido";
console.log(`nivel${nivel} : ${acesso2}`)


/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/
let preco =190 ;
let precoTotal = preco >100 ? preco * 0.9 : preco;
console.log(`preço original: ${preco}, com desconto: ${precoTotal}`)
/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
let nota = 7.5;
let statusAluno = nota >= 7 ? "aprovado" : "reprovado";
console.log(`nota ${nota}: ${statusAluno}`)
/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/
let valor2 = 15;
let parOuImpar = valor2 % 2 ===0 &&valor2 >10 ? "Atende critérios" : "Não atende";
console.log(`O numero ${valor2}  ${parOuImpar}`)
/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/
let num2 = -3;
let tipo = num2 >0 ? "positivo" : num2<0 ? "negativo": "zero";
console.log(`${num2} é: ${tipo}`);
/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/
let acesso1 = 2717;
let verificacao1 = acesso1 ==2707  ?  "login ok" :  "falha no login";
console.log(verificacao1)

//jeito do professor 

let usuario = "admin";
let senha = "2121";
let login = usuario ==="admin" && senha ==="2121" ? "login ok"  : "falha no login";
console.log(login);

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
let idadePessoa = 51;
let classificacao = idadePessoa < 12 ? "Criança": 
idadePessoa <=17 ? "adolecente":
idadePessoa <=59 ? "adulto":"idoso";
console.log(`idade ${idadePessoa}:${classificacao}`)