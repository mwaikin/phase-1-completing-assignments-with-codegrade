let num1 = 8;
let num2 = 8;
let multiply = num1 * num2;
console.log(multiply);

/*random number*/
//random generate any number 
function random(numR, numG) {
    numR = Math.ceil(numR); //function to round numbers to the nearest integer
    numG = Math.floor(numG); //round numbers to the nearest integer, negativeninfinity
    return Math.floor(Math.random() * (numG - numR + 1)) + numR;}
    console.log(random(10, 20));

    /*mod*/
let num3 = 4; 
let num4 = 17;
let mod = num3 % num4;
console.log(mod);
/*let num3= 4;
let num4m = 17;
let remainder = num3 %4;
console.log(remainder);
*/
/*max*/
let num5 = 20;
let num6 = 9;
let max = Math.max(num5, num6);
console.log(max);