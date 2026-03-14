let firstName: string | number = "Uanela Como";
firstName = "Bede";
firstName = 2;

const age: number = 40;
const isActive: boolean = true;
const address: undefined = undefined;

console.log(firstName, age);
// string, number, boolean, null

const firstNames: (string | number | boolean)[] = ["Franciso", 2];

firstNames.push(true);

console.log(firstNames);
