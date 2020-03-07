const student = [
    {id: 21, name: 'Alamin'},
    {id: 22, name: 'Alamin5'},
    {id: 23, name: 'Alamin4'},
    {id: 24, name: 'Alamin3'},
    {id: 25, name: 'Alamin2'},
    {id: 26, name: 'Alamin1'}
];
// const stdName = [];

// for ( let i = 0; i<student.length; i++){
//     const element = student[i];
//     stdName.push(element.name);
// }
// const stdName = student.map(nameElement=>nameElement.name);
// const stdName = student.filter(stdId=>stdId.id>24);
const stdName = student.find(stdId=>stdId.id>24);
console.log(stdName.name)