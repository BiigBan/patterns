
class PersonalInfo {
  fullName
  address
  phoneNumber
  email
  id
  position
  rank
  salary
  constructor(
    fullName: string,
  address: string,
  phoneNumber: string,
  email: string,
  id: number,
  position: number,
  rank: string,
  salary: number
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

abstract class Staff {
  personalInfo: PersonalInfo;
  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary){
      this.personalInfo = new PersonalInfo(id,
        fullName,
        address,
        phoneNumber,
        email,
        position,
        rank,
        salary)
    }
  abstract askSickLeave(department: Department): boolean
  abstract sendRequest(department: Department): boolean
}
class PostgraduateStudent extends Staff {
  askSickLeave(department: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }
  phdStatus: string;


  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary,
    phdStatus
  ) {
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    this.phdStatus = phdStatus;
    
  }
  
  
}
class Student extends Staff{
  askSickLeave(department: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }

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
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    
  }
}


class Department {
  title:string;
  students:Student[];
  professors:Professor[];
  courses:string[];
  requests:[];
  proceedRequests():void{
    console.log('proceedRequests')
  }
}

class Group{
  id:number;
  title:string;
  student_list:[];
  department_id:number;

}
class Seminar {
  id:number;
  title:string;
  deadline:Date;
  assignments:{}[];
  status: any;
  related_course:string;

  implementItem(itemName:string):string{
    return "str";
  }
  addComment(str:string): void{
    console.log("Coment added")
  }
}
class Enroll{
  studentCourses: {};
  courseStudents: {};
  constructor(){
    this.studentCourses = {};
    this.courseStudents = {};
  }
  enroll(student: Student, course: Course | null):void{
    if(course == null) return;
    let keys = Object.keys(this.studentCourses);
    if(keys.includes(student.personalInfo.id.toString())){
      console.log("Currently enroll this course", this.studentCourses);
    }
    else{
      this.studentCourses[student.personalInfo.id] = [course.title];
      this.courseStudents[course.title] = [student.personalInfo.id];
      //console.log("Welcome new student to this course", this.studentCourses, this.courseStudents)
    }
  }
  unenroll(student: Student, course: Course | null):void{
    if(course == null) return;
    let keys = Object.keys(this.studentCourses);
    if(!keys.includes(student.personalInfo.id.toString())){
      console.log("There is no such student in this course", this.studentCourses);
    }
    else{
      console.log("Removed student from this course", this.studentCourses)
      delete this.studentCourses[student.personalInfo.id];
      delete this.courseStudents[course.title];
      console.log(this.studentCourses)
    }
  }
}


const stud1 = new Student(
  3,
  "Denys Zaruba",
  "Zelena street",
  "+380933030335",
  "deniszeruba@gmail.com",
  "front-end developer",
  "rank",
  300)

const stud = new Student(
  4,
  "Denys Zaruba",
  "Zelena street",
  "+380933030335",
  "deniszeruba@gmail.com",
  "front-end developer",
  "rank",
  300)





//Course factory

  class Course {
    seminars:number[];
    title: string
    constructor(title: string){
      this.seminars = [];
      this.title = title;
    }
  }
  
  class MathCourse extends Course {
    feature: string;
    constructor(title: string){
      super(title);
      this.feature = "Can teach you how to count cos(3301) without a calculator";
    }
  }
  
  class ProgrammingCourse extends Course {
    feature: string;
    constructor(title: string){
      super(title);
      this.feature = "Also can develope calculator for math course btw...";
    }
  }
  
  class AlgorithmsCourse extends Course {
    feature: string;
    constructor(title: string){
      super(title);
      this.feature = "Can teach you how to optimize your calculator";
    }
  }
  
  class CourseFactory {
    create(type:string){
      if(type === "Math"){
        return new MathCourse("Math");
      }
      if(type === "Programming"){
        return new ProgrammingCourse("Programming");
      }
      if(type === "Algorithms"){
        return new AlgorithmsCourse("Algorithms");
      }
      return null;
    }
  }

// Professor factory


abstract class Professor extends Staff {
  askSickLeave(destination: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }
  add_postgraduate_student(student: PostgraduateStudent): void {

  }
  abstract createCourse(title:string);
  
  fill_course(group:Group,...args):void{
    console.log("course_filled");
  }
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
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    
  }
}

class MathProffesor extends Professor {
  feature: string;
  createCourse(): MathCourse | null {
    const factory = new CourseFactory();
    return factory.create("DataBase");
  }
  constructor(id,
    fullName,
    address,
    phoneNumber,
    email
    ){
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      "DataBase Professor",
      "Professor",
      "4000");
  }
}

class ProgrammingProffesor extends Professor {
  feature: string;
  createCourse(): ProgrammingCourse | null {
    const factory = new CourseFactory();
    return factory.create("Programming");
  }
  constructor(id,
    fullName,
    address,
    phoneNumber,
    email
    ){
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      "Programming Professor",
      "Professor",
      "5000");
  }
}

class AlgorithmsProffesor extends Professor {
  feature: string;
  createCourse(): AlgorithmsCourse | null {
    const factory = new CourseFactory();
    return factory.create("Algorithms");
  }
  constructor(id,
    fullName,
    address,
    phoneNumber,
    email
    ){
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      "Algorithms Professor",
      "Professor",
      "4500");
  }
}

class ProfessorsFactory {
  create(type: string, id: number, name: string, address: string, number: string, email: string){
    if(type === "DataBase"){
      return new MathProffesor(id, name, address, number, email);
    }
    if(type === "Programming"){
      return new ProgrammingProffesor(id, name, address, number, email);
    }
    if(type === "Algorithms"){
      return new AlgorithmsProffesor(id, name, address, number, email);
    }
    return null;
  }
}



const enroll = new Enroll();
const factoryCourse = new CourseFactory();
const mathCourse = factoryCourse.create("DataBase");
const mathProgramming = factoryCourse.create("Programming");
const mathAlgorithms = factoryCourse.create("Algorithms");

const profFact = new ProfessorsFactory();
const mathProf = profFact.create("DataBase", 4, "Andrew Anotil", "Chervona", "0971121365", "andrew.pr@gmail.com");

const newCourse = mathProf?.createCourse();
console.log(mathProf)