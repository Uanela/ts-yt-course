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

function getAge(year: number): number | string {
  if (year > 2000) return 2 + 2;
  else return "hello";
}

let age = getAge(200);

age = [];

console.log(age);
