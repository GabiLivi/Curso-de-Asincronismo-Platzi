function sum(num1, num2){
    return num1 + num2;
}

function cacl(num1, num2, callback){
    return callback(num1, num2);
}


console.log(cacl(8, 8, sum));

//setTimeOut

setTimeout(function(){
    console.log("Hello JS");
}, 2000)

function gretting(name) {
    console.log(`Hello ${name} `)
};

setTimeout(gretting, 2000, "Gabi"); //de parametros usa una function, el tiempo y el parámetro de la function


//XMLHTTPRequest 8/26

/*
📲 XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia
 servicios en la nube(URLs o APIs). */


