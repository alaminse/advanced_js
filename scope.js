let bonus = 20; // any where it can accessible 
function sum(n1, n2){
    let result = n1 + n2 + bonus;
    return result;
}
// scope not accept
//console.log(result)
const output = sum(2,3);
console.log(output)