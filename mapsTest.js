// let studentRecords = [ 
//         {name: 'John', id: 123, marks : 98 }, 
//         {name: 'Baba', id: 101, marks : 23 }, 
//         {name: 'yaga', id: 200, marks : 45 }, 
//         {name: 'Wick', id: 115, marks : 75 } 
//         ]
// ЗАДАНИЕ 1
// let newStudentRecords = studentRecords.map(students =>{
//     return students.name.toUpperCase()
// })
// console.log(newStudentRecords)
// ЗАДАНИЕ 2
// const highMarks = studentRecords.filter(student =>{
//     if(student.marks >=50){
//         return true
//     }
// })
// console.log(highMarks)
// либо
// const highMarks = studentRecords.filter(student => student.marks > 50)
// либо
// const highMarks = studentRecords.filter(student =>{
//    return student.marks >= 50
// })
// ЗАДАНИЕ 3

// const sumOfMarks = studentRecords.reduce((total, student)=>{
// return total + student.marks
// },0)
// console.log(sumOfMarks)



var arr = [1, -2, 3, 0, 4, -5, 6, -11];
// ЗАДАНИЕ 1
// Дан массив с числами. 
// Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень и этих чисел.

// const positiveNum = arr.map(number=>{
//     return number>0
// })
// console.log(positiveNum)     просто выводит положительные числа

const totalOfNum = arr.filter(number=>{
if(number>0){  
console.log(Math.sqrt(number))
}
})


