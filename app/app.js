var userName = "Terrence";
var userAge = 33;
var isActiveOnGithub = true;
var Terrence = {
    name: userName,
    age: userAge,
    isActive: isActiveOnGithub
};
var getUserName = function (user) {
    return user.name;
};
console.log(getUserName(Terrence)); // returns Terrence
