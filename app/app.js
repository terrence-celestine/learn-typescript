var printID = function (id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
var greetPeople = function (users) {
    if (Array.isArray(users)) {
        console.log("Hello, " + users.join(" and "));
    }
    else {
        console.log("Welcome " + users);
    }
};
greetPeople(["Eric", "Kevin", "John"]); // returns HEllo, Eric and Kevin and John
greetPeople("Terrence"); // returns Welcome Terrence
