class Department {
  private employees: string[] = [];
  constructor(private id: string, public name: string) {
    this.name = name;
    this.id = id;
  }
  describe(this: Department) {
    console.log("Department" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.describe();

accounting.addEmployee("Terrence");
accounting.addEmployee("Justin");
accounting.printEmployeeInformation();
