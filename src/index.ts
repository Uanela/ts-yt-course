// let firstName: string | number = "Uanela Como";
// firstName = "Bede";
// firstName = 2;

// const age: number = 40;
// const isActive: boolean = true;
// const address: undefined = undefined;

// console.log(firstName, age);
// // string, number, boolean, null

// const firstNames: (string | number | boolean)[] = ["Franciso", 2];

// firstNames.push(true);
// console.log(firstNames);

let car: string = "BWM";
let brand: number = 3;
// brand = false;

function getAge(year: number): number | string {
  if (year > 2000) return 2 + 2;
  else return "hello";
}

let age = getAge(200);

age = 2;

console.log(age);

// Os Error mais comuns

// 1 - Type x is not assignable to type y
// 2 - Property x does not exist on type y
const person: { name: string; age: number } = { name: "Uanela", age: 2 };
console.log(person.age);
// 3 - Object is possibly null or undefined
let product: { name: string } | undefined;

if (product) console.log(product.name);

// 4 - Argument of type x is not assignable to parameter of type y
function sum(num1: number, num2: number) {
  return num1 * num2;
}
///@ts-ignore
console.log(sum(4, ":"));

// Cannot find name x
///@ts-ignore
// console.log(laptop);
console.log("Hello World From TypeScript");
