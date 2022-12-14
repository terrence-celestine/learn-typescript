class Department {
  protected employees: string[] = [];
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, ": IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment("d1", ["Terrence"]);

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);
accounting.addEmployee("Peter");
accounting.printEmployeeInformation();
