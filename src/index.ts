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

// let car: string = "BWM";
// let brand: number = 3;
// // brand = false;

// function getAge(year: number): number | string {
//   if (year > 2000) return 2 + 2;
//   else return "hello";
// }

// let age = getAge(200);

// age = 2;

// console.log(age);

// // Os Error mais comuns

// // 1 - Type x is not assignable to type y
// // 2 - Property x does not exist on type y
// const person: { name: string; age: number } = { name: "Uanela", age: 2 };
// console.log(person.age);
// // 3 - Object is possibly null or undefined
// let product: { name: string } | undefined;

// if (product) console.log(product.name);

// // 4 - Argument of type x is not assignable to parameter of type y
// function sum(num1: number, num2: number) {
//   return num1 * num2;
// }
// ///@ts-ignore
// console.log(sum(4, ":"));

// // Cannot find name x
// ///@ts-ignore
// // console.log(laptop);
// console.log("Hello World From TypeScript");

// type Address = {
//   country: string;
//   city: string;
//   street: string;
// };

// // Type Alias
// type Person = {
//   readonly firstName: string;
//   lastName: string;
//   age?: number;
//   address: Address;
// };

// // Toyota, Bmw, Ferrari, Mercedes Benz
// type BrandName = "Toyota" | "Bmw" | "Ferrari" | "Mercedes Benz";

// // Interface
// interface Car {
//   model: string;
//   brand: { name: BrandName } & Address;
// }

// const person1: Person = {
//   firstName: "Uanela",
//   lastName: "Como",
//   address: {
//     country: "Mozambique",
//     city: "Beira",
//     street: "Rua 123",
//   },
// };

// const person2: Person = {
//   firstName: "Francisco",
//   lastName: "Como",
//   age: 25,
//   address: {
//     country: "Portugal",
//     city: "Beira",
//     street: "Rua",
//   },
// };

// const car: Car = {
//   model: "Ractis",
//   brand: {
//     country: "Portugal",
//     city: "Beira",
//     street: "Rua",
//     name: "Toyota",
//   },
// };

// console.log(person2.firstName);
// console.log(person2.firstName);

// Union Type |
// const three = 3;
// type ID = string | number | boolean;

// let id: ID = 2;
// id = "uanela";
// id = true;

// interface CarWithModel {
//   model: string;
//   speed: number;
// }
// interface CarWithName {
//   name: string;
//   releaseYear: number;
// }

// type Car = CarWithModel | CarWithName | string[] | boolean;

// const car1: Car = { model: "Jeep", speed: 300 };
// const car2: Car = { name: "Hummer", releaseYear: 2005 };
// const car3: Car = ["Samsung"];
// const car4: Car = true;

// // Intersection Type &

// type CarWithAllProps = CarWithModel & CarWithName;

// const car5: CarWithAllProps = {
//   model: "Cx5",
//   name: "Bwm",
//   speed: 400,
//   releaseYear: 2001,
// };

// function sum(num1: number, num2: number = 0): Car | string | number {
//   const result = num1 + num2;

//   if (result < 5) return result;
//   else if (result < 10) return car5;
//   else return "Hello From World";
// }

// console.log(sum(1));
// console.log(sum(1, 7));
// console.log(sum(20));

// type Multiply = (num1: number, num2: number) => number;

// const multiply: Multiply = (x, y) => {
//   return 0;
// };

// any, unknown, void e typeof

// any
// let value: any = "Text";
// value.toUpperCase();
// // value.toFixe();
// value = 2;
// value.toFixed();
// value = true;

// // unknown
// let value2: unknown = "Text";

// if (typeof value2 === "string") {
//   value2.toUpperCase();
//   // value2.
// }
// if (typeof value2 === "number") value2.toFixed();

// // void
// let value3: void;

// function subtract(): void {
//   return;
// }

// Omit, Pick, Partial
let users: User[] = [];

interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  height: number;
  weight: number;
  createdAt: Date;
}
// Omit
type CreateUserData = Omit<User, "id" | "createdAt">;

// Pick
type HealthData = Pick<User, "height" | "weight">;

// Partial
type UpdateUserData = Omit<Partial<User>, "id" | "createdAt">;

function getUserById(id: number): User {
  return users.find((user) => user.id === id)!;
}

// function updateUserById(){

// }

function create(data: CreateUserData): User {
  const user = { id: users.length + 1, createdAt: new Date(), ...data };
  users.push(user);
  return user;
}

function updateHealthById(id: number, data: HealthData): User {
  let existingUser = getUserById(id);
  users = users.map((user) => {
    if (user.id !== id) return user;
    existingUser = { ...user, ...data };
    return existingUser;
  });
  return existingUser;
}

function updateUserById(id: number, data: UpdateUserData): User {
  let existingUser = getUserById(id);
  users = users.map((user) => {
    if (user.id !== id) return user;
    existingUser = { ...user, ...data };
    return existingUser;
  });
  return existingUser;
}

create({
  firstName: "Luis",
  lastName: "Como",
  birthday: new Date("1976-08-09"),
  height: 170,
  weight: 85,
});

create({
  firstName: "Leo",
  lastName: "Messi",
  birthday: new Date("1976-08-09"),
  height: 170,
  weight: 85,
});

console.log("All users", users);

updateHealthById(2, { weight: 70, height: 160 });

updateUserById(2, { firstName: "Uanela" });
console.log(" users", users);
