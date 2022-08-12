const printID = (id: string | number) => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};

const greetPeople = (users: string[] | string) => {
  if (Array.isArray(users)) {
    console.log("Hello, " + users.join(" and "));
  } else {
    console.log("Welcome " + users);
  }
};

greetPeople(["Eric", "Kevin", "John"]); // returns HEllo, Eric and Kevin and John
greetPeople("Terrence"); // returns Welcome Terrence
