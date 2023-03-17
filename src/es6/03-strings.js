//Antes de EMCAScript6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';        

// TEMPLATE LITERALS (Ahora con ECMAScript6)
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);                          

// MULTI-LINE STRINGS
// Antes de ECMAScript6
let lorem = 'esto es un string \n' + 'esto es otra linea'; 
//Ahora con ECMAScript6
let lorem2 = `Esta es una frase epica       
    la continuación de una frase epica.
`;                                                         

console.log(lorem);
console.log(lorem2); 