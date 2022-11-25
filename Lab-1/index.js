var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Developer = /** @class */ (function () {
    function Developer(id, name, address, phoneNumber, email, position, rank) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.rank = rank;
    }
    Developer.prototype.assign_possibility = function (projects) {
        if (projects.developers.includes(this) &&
            this.projects.includes(projects)) {
            console.log("".concat(this.name, " can to assign the project."));
            return true;
        }
        console.log("".concat(this.name, " can't assign the project."));
        return false;
    };
    Developer.prototype.assigned_projects = function () {
        console.log("Assigned project: ".concat(this.projects));
        return this.projects;
    };
    Developer.prototype.assign = function (projects) {
        if (this.projects.includes(projects)) {
            console.log("".concat(this.name, " is assign"));
        }
        else {
            this.projects = __spreadArray(__spreadArray([], this.projects, true), [projects], false);
            console.log("".concat(this.name, " assigned the project"));
        }
    };
    Developer.prototype.unassign = function (projects) {
        if (!this.projects.includes(projects)) {
            console.log("".concat(this.name, " currently unassigned this project"));
        }
        else {
            this.projects = this.projects.filter(function (el) { return el.title != projects.title; });
            console.log("".concat(this.name, " unassigned this project"));
        }
    };
    return Developer;
}());
var Project = /** @class */ (function () {
    function Project(title, startDate, taskList, developers, limit) {
        this.title = title;
        this.startDate = startDate;
        this.taskList = taskList;
        this.developers = developers;
        this.limit = limit;
    }
    Project.prototype.add_developer = function (Developer) {
        if (this.developers.length + 1 <= this.limit) {
            if (this.developers.includes(Developer)) {
                console.log("This developer already has been added");
            }
            else {
                this.developers = __spreadArray(__spreadArray([], this.developers, true), [Developer], false);
            }
        }
        else {
            console.log("The developer limit for this project has been exceeded. ".concat(Developer.name, " can't join."));
        }
    };
    Project.prototype.remove_developer = function (Developer) {
        if (this.developers.includes(Developer)) {
            this.developers = this.developers.filter(function (el) { return el.name !== Developer.name; });
            console.log("".concat(Developer.name, " has been removed from project ").concat(this.title, "."));
        }
        else {
            console.log("".concat(Developer.name, " not found in project ").concat(this.title, "."));
        }
    };
    return Project;
}());
var QAEngineer = /** @class */ (function () {
    function QAEngineer(id, name, adress, phoneNumber, email, salary, rank, position) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.salary = salary;
        this.rank = rank;
        this.position = position;
    }
    ;
    QAEngineer.prototype.text_feature = function (obj) {
        if (obj.isDone) {
            console.log("Assignment is done. Project was created");
        }
        else {
            console.log("Assignment isn't done. You need to fix the bags");
        }
    };
    ;
    return QAEngineer;
}());
var ProjectManager = /** @class */ (function () {
    function ProjectManager(id, name, adress, phoneNumber, email, salary, project) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.salary = salary;
        this.project = project;
    }
    ProjectManager.prototype.discuss_progress = function (obj) {
        if (obj.isDone) {
            console.log("Project manager checked the project. Everything is all right");
        }
        else {
            console.log("We need spent more time for testing");
        }
    };
    return ProjectManager;
}());
var DenisDeveloper = new Developer(1, "Denis Zaruba", "Pasichna 62B", "0933027498", "deniszaruba232@gmail.com", 2, "Junior Front-End developer");
var DenisDeveloper2 = new Developer(2, "Denis Zaruba2", "Pasichna 62A", "0933027213", "deniszaruba23221sad2@gmail.com", 7, "Middle Front-End developer");
var AndriyQA = new QAEngineer(1, "Andriy", "Tarnavskogo", "0969954919", "emailOfQA@gmail.com", 900, 'Middle', 'QA Engineer');
//CreateProject
var projectInfo = new Project("Web site about cats", new Date("Septemper 1, 2022"), [
    "built app",
    "start development",
    "create registration",
    "...",
    "deploy the projects",
], [DenisDeveloper, DenisDeveloper2], 5);
var OlegPM = new ProjectManager(1, "Andriy", "Tarnavskogo", "0969954919", "emailOfQA@gmail.com", 900, projectInfo);
//add developer
projectInfo.add_developer(DenisDeveloper);
console.log(projectInfo);
//remove developer
projectInfo.remove_developer(DenisDeveloper);
console.log(projectInfo);
projectInfo.add_developer(DenisDeveloper);
projectInfo.add_developer(DenisDeveloper2);
OlegPM.discuss_progress({ resieved_tastls: false, isDone: false, description: 'Checking by QA', status: 'pending' });
console.log(OlegPM);
AndriyQA.text_feature({
    resieved_tastls: false,
    isDone: false,
    description: "In progress in checking",
    status: "pending"
});
// node .
