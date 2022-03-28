// const Arr = ["Asd1", "asd2", "asd3"];

// const Arr2 = Arr.forEach((element) => console.log(element));
// // выполняет колбэк для каждого элемента массива который находится в массиве на данный момент

// for (let i = Arr; (i = Arr.length); i++) {
//   text = "arr =" + i;
//   console.log(text);
// } это привело к бесконечному циклу и сломало мой ноутбук, не повторять это

// const Arr = ["Asd1", "asd2", "asd3"];

// const newArr = { ...Arr };
// console.log(Arr, newArr);

// let newArr = Arr.slice();
// console.log(Arr, newArr);

let num = 5;
//base=2 — обычно используется для отладки побитовых операций, цифры 0 или 1.
console.log(num.toString(2));

//base=16 — для шестнадцатеричного представления цвета, кодировки символов и т.д., цифры могут быть 0..9 или A..F.
console.log(num.toString(16));

//base=36 — максимальное основание, цифры могут быть 0..9 или A..Z. То есть, используется весь латинский алфавит для представления числа. Забавно, но можно использовать 36-разрядную систему счисления для получения короткого представления большого числового идентификатора.
console.log((123456).toString(36)); //2n9c

//FizzBazz проверка чисел на кратность

for (let i = 1; i < 101; i++) {
  console.log([i]);
  if (i % 3 == 0) {
    console.log(i + "Fizz");
  } else if (i % 5 == 0) {
    console.log(i + "Bazz");
  } else {
    console.log(i);
  }
}

const Arr = ["Asd1", "asd2", "asd3"];

for (let string in Arr) {
  const newArr = [Arr[string]];
  console.log(newArr);
}

const arrForCopy = ["Asd1", "asd2", "asd3"];

const copy = arrForCopy.slice();
const copy2 = [...arrForCopy];

copy.push("asd4");
arrForCopy.push("hello arr 1");
console.log(arrForCopy);
console.log(copy);
