class Developer {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  position: number;
  rank: string;
  projects: Project[];
  assign_possibility(projects: Project): boolean {
    if (
      projects.developers.includes(this) &&
      this.projects.includes(projects)
    ) {
      console.log(`${this.name} can to assign the project.`);
      return true;
    }
    console.log(`${this.name} can't assign the project.`);
    return false;
  }
  assigned_projects(): Project[] {
    console.log(`Assigned project: ${this.projects}`);
    return this.projects;
  }
  assign(projects: Project): void {
    if (this.projects.includes(projects)) {
      console.log(`${this.name} is assign`);
    } else {
      this.projects = [...this.projects, projects];
      console.log(`${this.name} assigned the project`);
    }
  }
  unassign(projects: Project): void {
    if (!this.projects.includes(projects)) {
      console.log(`${this.name} currently unassigned this project`);
    } else {
      this.projects = this.projects.filter((el) => el.title != projects.title);
      console.log(`${this.name} unassigned this project`);
    }
  }

  constructor(
    id: number,
  name: string,
  address: string,
  phoneNumber: string,
  email: string,
  position: number,
  rank: string
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.rank = rank;
  }
}

type assignment = {
  resieved_tastls: boolean;
  isDone: boolean;
  description: string;
  status: string;
};

class Project {
  title: string;
  startDate: Date;
  taskList: string[];
  developers: Developer[];
  limit: number;
  constructor(
    title: string,
    startDate: Date,
    taskList: string[],
    developers: Developer[],
    limit: number
  ) {
    this.title = title;
    this.startDate = startDate;
    this.taskList = taskList;
    this.developers = developers;
    this.limit = limit;
  }
  add_developer(Developer: Developer): void {
    if (this.developers.length + 1 <= this.limit) {
      if (this.developers.includes(Developer)) {
        console.log(`This developer already has been added`);
      } else {
        this.developers = [...this.developers, Developer];
      }
    } else {
      console.log(
        `The developer limit for this project has been exceeded. ${Developer.name} can't join.`
      );
    }
  }
  remove_developer(Developer: Developer): void {
    if (this.developers.includes(Developer)) {
      this.developers = this.developers.filter(
        (el) => el.name !== Developer.name
      );
      console.log(
        `${Developer.name} has been removed from project ${this.title}.`
      );
    } else {
      console.log(`${Developer.name} not found in project ${this.title}.`);
    }
  }
}

class QAEngineer {
  id: number;
  name: string;
  adress: string;
  phoneNumber: string;
  email: string;
  salary: number;
  rank: string;
  position: string;

  constructor(
    id: number,
  name: string,
  adress: string,
  phoneNumber: string,
  email: string,
  salary: number,
  rank: string,
  position: string,
  ) {
    this.id = id;
    this.name = name;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.email= email;
    this.salary= salary;
    this.rank = rank;
    this.position = position
  };
  text_feature(obj: assignment) {
    if (obj.isDone) {
      console.log(`Assignment is done. Project was created`);
    }
    else {
      console.log(`Assignment isn't done. You need to fix the bags`);
    }
  };
}
class ProjectManager {
  id: number;
  name: string;
  adress: string;
  phoneNumber: string;
  email: string;
  salary: number;
  project: Project

  constructor(
    id: number,
    name: string,
    adress: string,
    phoneNumber: string,
    email: string,
    salary: number,
    project: Project
  ) {
    this.id = id;
    this.name = name;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.salary = salary;
    this.project = project;
  }
  discuss_progress(obj: assignment) {
    if (obj.isDone) {
      console.log(`Project manager checked the project. Everything is all right`);
    } else {
      console.log(`We need spent more time for testing`);
    }
  }
}

const DenisDeveloper = new Developer(
  1,
  "Denis Zaruba",
  "Pasichna 62B",
  "0933027498",
  "deniszaruba232@gmail.com",
  2,
  "Junior Front-End developer"
);

const DenisDeveloper2 = new Developer(
  2,
  "Denis Zaruba2",
  "Pasichna 62A",
  "0933027213",
  "deniszaruba23221sad2@gmail.com",
  7,
  "Middle Front-End developer"
);

const AndriyQA = new QAEngineer(
  1,
  "Andriy",
  "Tarnavskogo",
  "0969954919",
  "emailOfQA@gmail.com",
  900,
  'Middle',
  'QA Engineer'
);
//CreateProject
const projectInfo = new Project(
  "Web site about cats",
  new Date("Septemper 1, 2022"),
  [
    "built app",
    "start development",
    "create registration",
    "...",
    "deploy the projects",
  ],
  [DenisDeveloper,DenisDeveloper2],
  5
);

const OlegPM = new ProjectManager(
  1,
  "Andriy",
  "Tarnavskogo",
  "0969954919",
  "emailOfQA@gmail.com",
  900,
  projectInfo
);
//add developer
projectInfo.add_developer(DenisDeveloper);
console.log(projectInfo);
//remove developer
projectInfo.remove_developer(DenisDeveloper);
console.log(projectInfo);

projectInfo.add_developer(DenisDeveloper);
projectInfo.add_developer(DenisDeveloper2);

OlegPM.discuss_progress({resieved_tastls:false, isDone:false, description:'Checking by QA', status:'pending'})
console.log(OlegPM);

AndriyQA.text_feature({
  resieved_tastls: false,
  isDone: false,
  description: "In progress in checking",
  status: "pending",
});

// node .