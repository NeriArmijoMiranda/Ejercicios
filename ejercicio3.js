/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

const chocolates = [1, 2, 3, 4];
const sumarChocolates = (array) => {
    let sumatoria = array.reduce((sum, current) => sum + current, 0);
    let producto = array.reduce ((prod, current) => prod * current, 1);
    return { sumatoria, producto};
    };
const resultado = sumarChocolates(chocolates);   
console.log(`La sumatoria es ${resultado.sumatoria}.`);
console.log(`El producto es ${resultado.producto}.`);
   
   
   
   
