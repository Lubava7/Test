const animals = [
  { name: "Elephant", age: 4, color: "grey" },
  { name: "Dog", age: 2.5, color: "beige" },
  { name: "Eagle", age: 1, color: "darkgrey" },
  { name: "Fish", age: 1, color: "black" },
  { name: "Goat", age: 3, color: "white" },
  { name: "Moose", age: 10, color: "brown" },
  { name: "Pig", age: 5, color: "pink" },
];

// Methods:

// For
// for(let i = 0; i < animals.length; i++){
// console.log(animals[i])
// }
// либо
// for(let animal of animals){
// console.log(animal)
// }

// forEach
// animals.forEach(function(animal, index, aArr) {
//     console.log(animal)
//     console.log(index)
//     console.log(aArr)
// });        параметры index и aArr используются очень редко,
//            так что их можно не писать
// либо стрелочная функция
// animals.forEach(animal => console.log(animal))

// Map
// const newAnimals =animals.map(animal =>{
//     return animal.name
// })
// console.log(newAnimals)
// либо
// const newAnimals =animals.map(animal =>`${animal.name} (${animal.age})`)
// console.log(newAnimals)
// также можно сдпелать так:
// const newAnimals =animals.map(animal => animal.age * 3)
// console.log(newAnimals)

// Filter
// const adults = animals.filter(animal =>{
//     if(animal.age > 3){
//         return true
//     }
// })
// console.log(adults)

// Reduce
// const sumOfAges = animals.reduce((total, animal)=>{
// return total + animal.age
// },0)       ноль это начальное значение и его можно менять
// console.log(sumOfAges)

// Find
// animals.find(animal => {

// })
// FindIndex
