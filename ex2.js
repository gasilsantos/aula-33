//let a = 10;
//let a = 100;
//console.log(a);

//variavel de escopo global

let a = 10;

function multiplica(b){
    //b recebe o valor do a , variavel de escopo de função
    let a = b*2;
    console.log("dentro da função:" , a); 
}

multiplica(a)
console.log("fora da função:", a)
