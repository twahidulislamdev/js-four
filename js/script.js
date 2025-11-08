// function math(){
//     let x = 10
//     let y = 30
//     console.log(x*y);

// }
// math()
// Dynamic Data pass kora
// function person(name = "Twahidul Islam Emon", age = 22){
//     console.log(`My name is ${name}`);
//     console.log(`My am ${age} old`);

// }
// person()

let name = ["Twahidul", "Yousuf", "Korim", "Tamim", "Yakub"];
function grattings(personsName) {
  //   console.log(`Wellcome ${personsName}`);
}
for (let i = 0; i < name.length; i++) {
  grattings(name[i]);
}

// Loop using map
// name.map(items =>{
//     console.log(items);

// })

let staf = ["karim", "Rahim", "Saim", "Rabbi", "Siam"];
staf.map((items) => {
  // console.log(`wellcome ${items}`);
});
function add(num1, num2) {
  let total = num1 * num2;
  return total;
}
let bill = add(5, 5);
// console.log(bill);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEven(5));
// console.log(isEven(10));

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}
// console.log(isOdd(55));
// console.log(isOdd(56));

// let x = 20;
// x += 20;
// console.log(x);


function sumOfNumba(numbers) {
  let sum = 0;
  for(let number of numbers ){
    console.log(number);
    sum = sum + number
    
    
  }
  return sum;
}
let numbs = [54, 44, 90, 56, 78, 65]
let fol = sumOfNumba(numbs)
console.log('Sum of the number', fol);

