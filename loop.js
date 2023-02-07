
let j = 1;
j++;
//j == 2
j++;
//j == 3;

let k = 5;
k--;
//k == 4;


//boucle FOR
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

let nbr1 = 4;
let nbr2 = 6;

//let nbr3 = nbr1 + nbr2;
nbr1 = nbr1 + nbr2;
nbr1 += nbr2;

let numberArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,25 ,78 ,79];
let total = 0;

//additionne tous les nombres
// for(let i = 0; i < numberArray.length; i++){
//     total += numberArray[i];
// }

//n'additionne que les nombres supérieurs à 5
// for(let i = 0; i < numberArray.length; i++){
//     if(numberArray[i] > 5 ){
//         total += numberArray[i];
//     }
// }

//n'additionne que les nombres paires
// for(let i = 0; i < numberArray.length; i++){
//     if(numberArray[i] % 2 == 0){
//         total += numberArray[i];
//     }
// }


// let numberModulo = 5;
// //si le nombre est pair
// if(numberModulo % 2 == 0){

// }


//boucle WHILE
// while(condition == true){

// }

let sentence = "une pomme";
let charToSearch = "p";
// let i = 0;
// let isNotFound = true;
// while(i < sentence.length && isNotFound){
//     if(charToSearch == sentence[i]){
//         isNotFound = false;
//         console.log("trouvé");
//     }else{
//         console.log("je cherche");
//     }
//     i++;
// }

// i = 0;
// while(i < sentence.length){
//     if(charToSearch == sentence[i]){
//         break;
//     }else{
//         console.log("je cherche");
//     }
//     i++;
// }


// for(let i = 0; i < sentence.length; i++){
//     if(charToSearch == sentence[i]){
//         console.log("j'ai trouvé à " + i);
//     }else{
//         console.log("je cherche");
//     }
// }


// let sampleTexte = "j'ai mangé une poire";
// console.log(sampleTexte.indexOf("z"));


while(5 != 5){
    console.log("boucle");
}


//boucle DO WHILE
do{
    console.log("do while");
}while(5 != 5);