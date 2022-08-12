interface User {
  name: string;
  age: number;
  isActive: true | false;
}

const userName: string = "Terrence";
const userAge: number = 33;
const isActiveOnGithub: boolean = true;

const Terrence: User = {
  name: userName,
  age: userAge,
  isActive: isActiveOnGithub,
};

const getUserName = (user: User): string => {
  return user.name;
};

console.log(getUserName(Terrence)); // returns Terrence
