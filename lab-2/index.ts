class PersonalInfo {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  id: number;
  position: number;
  rank: string;
  salary: number;
  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary
  ) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.rank = rank;
    this.salary = salary;
  }
}

class Employee {
  personalInfo: PersonalInfo;
  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary
  ) {
    this.personalInfo = new PersonalInfo(
      id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary
    );
  }
}
abstract class Developer extends Employee {
  askSickLeave(projectManager: ProjectManager): boolean {
    return false;
  }
  calculate_salary(salary: number): void {
    console.log(salary)
  }

  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary,
  ) {
    super(id, fullName, address, phoneNumber, email, position, rank, salary);
  }
}
abstract class AssignManagement extends Employee {
  employee: Employee;
  project: Project;

  assign(Employee: Employee, Project: Project): void {
    this.employee = Employee;
    this.project = Project;
  }
  unAssign(Employee, Project): void {
    console.log('unAssigned current employee from this project');
    
  }
}

class Project {
  taskList:number[];
  title: string
  constructor(title: string){
    this.taskList = [];
    this.title = title;
  }
  getSpecificEmployee(): void {
    console.log('Employee got');
    
  }
}
class Task {
  id:number;
  title:string;
  deadline:Date;
  items:{id:number, priority: string}[];
  status: any;
  related_course:string;
  constructor(id,title,deadline, items, status, related_course){
    this.id = id, this.title = title, this.deadline = deadline, this.items = items, this.status = status, this.related_course = related_course;
  }

  implementItem(itemName:string):string{
    return "Implemented item";
  }
  addComment(str:string): void{
    this.title = str
    this.items.push({id: this.items.length+1, priority: 'min'});
    console.log(this.title);
    console.log(this.items);
    
    
  }
}
class QualityAssyrance{
  calculateSalary(projectManager: ProjectManager, employee: Employee): void {
    console.log(projectManager.salary + 8900);
  }
  addSickLeave(projectManager: ProjectManager): boolean {
    return true;
  }
}

class ProjectManager {
  id;
  name;
  email;
  adress;
  phoneNumber;
  salary;
  constructor(
    id: Number,
    name: string,
    email: string,
    adress: string,
    phoneNumber: string,
    salary: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.salary = salary;
  }
}

const me = new PersonalInfo(
  1,
  "Denis Zaruba",
  "Pasichna 62B",
  "0933027498",
  "deniszaruba03@gmail.com",
  "front-end developer",
  "Junior",
  300
)

console.log(me);


const AndriyEmployee = new Employee(
  1,
  "Andriy",
  "Leninka 2B",
  "093321521",
  "andriyLeninka27@gmail.com",
  "Front-End",
  "Senior",
  4700
);

console.log(AndriyEmployee.personalInfo);

const project = new Project(
  'New Super Project'
)

const task = new Task(
1,
'Fix the bags',
new Date(),
[{id: 1, priority: 'min'}],
false,
'youtube.com',
)

task.addComment('Please, fix this bag')

const OlegPM = new ProjectManager(
  1,
  "Oleg",
  "OlegWorka27@gmail.com",
  "Strea 2B",
  "093325561",
  4200,
);

const checkInfo = new QualityAssyrance();
console.log(checkInfo.addSickLeave(OlegPM));
checkInfo.calculateSalary(OlegPM,AndriyEmployee);

