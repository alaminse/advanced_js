const numbers = [1,2,3,4,5,6,7];

// map =========================
//Normal multiply 
// const output = [];
// for(let i=0; i<numbers.length; i++){
//     const elemetn = numbers[i];
//     const result = elemetn*elemetn;
//     output.push(result);
// }
// console.log(output)

// function square (elemetn){
//     return elemetn * elemetn;
// }
// numbers.map(function (elemetn, index, array){
//     console.log(elemetn, index, array)
// });

// const result = numbers.map(function (elemetn){
//     return elemetn*elemetn;
// });
// console.log(result)

// const square = elemetn => elemetn*elemetn;
// const result = numbers.map(x=>x*x);
// console.log(result)

// filter ==========================
const result = numbers.filter(x=> x>5);

const isThere = numbers.find(x=>x>5);

console.log(isThere)