var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonalInfo = /** @class */ (function () {
    function PersonalInfo(id, fullName, address, phoneNumber, email, position, rank, salary) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
    return PersonalInfo;
}());
var Employee = /** @class */ (function () {
    function Employee(id, fullName, address, phoneNumber, email, position, rank, salary) {
        this.personalInfo = new PersonalInfo(id, fullName, address, phoneNumber, email, position, rank, salary);
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, fullName, address, phoneNumber, email, position, rank, salary) {
        return _super.call(this, id, fullName, address, phoneNumber, email, position, rank, salary) || this;
    }
    Developer.prototype.askSickLeave = function (projectManager) {
        return false;
    };
    Developer.prototype.calculate_salary = function (salary) {
        console.log(salary);
    };
    return Developer;
}(Employee));
var AssignManagement = /** @class */ (function (_super) {
    __extends(AssignManagement, _super);
    function AssignManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssignManagement.prototype.assign = function (Employee, Project) {
        this.employee = Employee;
        this.project = Project;
    };
    AssignManagement.prototype.unAssign = function (Employee, Project) {
        console.log('unAssigned current employee from this project');
    };
    return AssignManagement;
}(Employee));
var Project = /** @class */ (function () {
    function Project(title) {
        this.taskList = [];
        this.title = title;
    }
    Project.prototype.getSpecificEmployee = function () {
        console.log('Employee got');
    };
    return Project;
}());
var Task = /** @class */ (function () {
    function Task(id, title, deadline, items, status, related_course) {
        this.id = id, this.title = title, this.deadline = deadline, this.items = items, this.status = status, this.related_course = related_course;
    }
    Task.prototype.implementItem = function (itemName) {
        return "Implemented item";
    };
    Task.prototype.addComment = function (str) {
        this.title = str;
        this.items.push({ id: this.items.length + 1, priority: 'min' });
        console.log(this.title);
        console.log(this.items);
    };
    return Task;
}());
var QualityAssyrance = /** @class */ (function () {
    function QualityAssyrance() {
    }
    QualityAssyrance.prototype.calculateSalary = function (projectManager, employee) {
        console.log(projectManager.salary + 8900);
    };
    QualityAssyrance.prototype.addSickLeave = function (projectManager) {
        return true;
    };
    return QualityAssyrance;
}());
var ProjectManager = /** @class */ (function () {
    function ProjectManager(id, name, email, adress, phoneNumber, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
        this.salary = salary;
    }
    return ProjectManager;
}());
var me = new PersonalInfo(1, "Denis Zaruba", "Pasichna 62B", "0933027498", "deniszaruba03@gmail.com", "front-end developer", "Junior", 300);
console.log(me);
var AndriyEmployee = new Employee(1, "Andriy", "Leninka 2B", "093321521", "andriyLeninka27@gmail.com", "Front-End", "Senior", 4700);
console.log(AndriyEmployee.personalInfo);
var project = new Project('New Super Project');
var task = new Task(1, 'Fix the bags', new Date(), [{ id: 1, priority: 'min' }], false, 'youtube.com');
task.addComment('Please, fix this bag');
var OlegPM = new ProjectManager(1, "Oleg", "OlegWorka27@gmail.com", "Strea 2B", "093325561", 4200);
var checkInfo = new QualityAssyrance();
console.log(checkInfo.addSickLeave(OlegPM));
checkInfo.calculateSalary(OlegPM, AndriyEmployee);
