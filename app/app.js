var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("Department" + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("d1", "Accounting");
accounting.describe();
accounting.addEmployee("Terrence");
accounting.addEmployee("Justin");
accounting.printEmployeeInformation();
