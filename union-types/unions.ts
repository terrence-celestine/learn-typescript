interface User {
  name: string;
  age: number;
  isActive: true | false;
}

const userName: string = "Terrence";
const userAge: number = 33;
const isActiveOnGithub: boolean = true;

const Person: User = {
  name: userName,
  age: userAge,
  isActive: isActiveOnGithub,
};

console.log(Person); // returns {name: 'Terrence', age: 33, isActive: true}
