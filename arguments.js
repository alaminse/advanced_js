function add (n1, n2){
    const argu = [...arguments];
    console.log(argu)
    return n1 +n2+arguments[2];
}
const result = add(2,3,4);
console.log(result)