import inquirer from "inquirer";
import fs from 'fs';
class Course {
    courseId: number;
    name: string;
    students: number[] = [];
    teachers: number[] = [];
    departments: number[] = [];

    constructor(courseId:number, name:string) {
        this.courseId = courseId;
        this.name = name
    }

    addStudent(rollNumber: number){
        this.students.push(rollNumber);
    }

    assignTeacher(teacherId:number){
        this.teachers.push(teacherId);
    }

    addDepartment(departmentId:number){
        this.departments.push(departmentId);
    }


}

class Department {
    name: string;
    deparmentId: number;
    courses: number[] = [];
    constructor(name: string, departmentId: number){
        this.name = name;
        this.deparmentId = departmentId;
    }

    addCourse(courseId: number){
        this.courses.push(courseId);
    }
}


function getObjectFromName(objs:any, namee:string){
    let obb = objs.find((obj:any) => obj.name === namee);
    return obb;
}
class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    salary: number;
    teacherId: number;
    courses: number[] = [];

    constructor(name: string, age: number, salary:number, teacherId:number){
        super(name, age);
        this.salary = salary;
        this.teacherId = teacherId;
    }

    assignCourse(courseId:number){
        this.courses.push(courseId);
    }
}

function getNamesFromObject(objs:any){
    let arr =  objs.map((obj:any) => obj.name)
    return arr;

}

class Student extends Person {
    rollNumber: number;
    courses: number[] = [];

    constructor(name: string, age: number, rollNumber: number){
        super(name, age);
        this.rollNumber = rollNumber;
    }

    async registerForCourse(courseId:number){
        this.courses.push(courseId);
    }
    
}


class StudentManagementSystem {
    courses: Course[] = [];
    students: Student[] = [];
    teachers: Teacher[] = [];
    departments: Department[] = [];
    async start(){
        let startAgain = true;
        if (fs.existsSync('sms_data.json')) {
            const rawData = fs.readFileSync('sms_data.json', 'utf8');
            const data = JSON.parse(rawData);
            this.students = data.students.map((student: any) => Object.assign(new Student('', 0, 0), student));
            this.courses = data.courses.map((course: any) => Object.assign(new Course(0, ''), course));
            this.teachers = data.teachers.map((teacher: any) => Object.assign(new Teacher('', 0, 0, 0), teacher));
            this.departments = data.departments.map((department:any) => Object.assign(new Department('',0), department));
        }
        
        while(startAgain) {
            const {options} = await inquirer.prompt({
                name: 'options',
                type: "list",
                message: "Choose your option",
                choices: ["Add Student", "Add Course", "Add Teacher", "Add Department", "Register Student in Course",  
            "Assign Course To Teacher", "Add Course in Department", "Display Students", "Display Courses","Display Teacher Details", "Display Department Details", "Exit"],
            })
            switch(options) {
                case "Add Student":
                   await this.addStudent();
                   break;
                case "Add Course":
                    await this.addCourse();
                    break;
                case "Add Department":
                    await this.addDepartment();
                    break;
                case "Register Student in Course":
                    await this.registerStudentInCourse();
                    break;
                case "Display Students":
                   await this.displayStudents();
                    break;
                case "Display Courses":
                    await this.displayCourses();
                    break;
                case "Add Teacher":
                    await this.addTeacher();
                    break;
                case "Assign Course To Teacher":
                   await this.assignCourseToTeacher();
                   break;
                case "Add Course in Department":
                    await this.addCourseToDepartment();
                    break;
                case "Display Teacher Details":
                   await this.displayTeacherDetails();
                   break;
                case  "Display Department Details":
                  await  this.displayDepartmentDetails()
                  break;
                case "Exit":
                    startAgain = false;
                    const data = {
                        students: this.students,
                        courses: this.courses,
                        teachers: this.teachers,
                        departments:this.departments
                    };
                    fs.writeFileSync('sms_data.json', JSON.stringify(data), 'utf8');
                    break;
            }
        }
    }

   async addStudent(){
        const {name, age, rollNumber} = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: 'Enter student name',
        },
        {
            name: 'age',
            type: 'number',
            message: 'Enter student age'
        },
        {
            name: "rollNumber",
            type: "number",
            message: "Enter Student Roll Number"
        }
    ]);
    
    let s:Student = new Student(name, age, rollNumber);
    this.students.push(s);
    }

    async addTeacher(){
        const {name, age, salary, id} = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: 'Enter Teacher Name',
        },
        {
            name: 'age',
            type: 'number',
            message: 'Enter Teacher Age'
        },
        {
            name: "salary",
            type: "number",
            message: "Enter Teacher Salary"
        },
        {
            name: "id",
            type: "number",
            message: "Enter Teacher id"
        }
    ]);

    
    
    let t:Teacher = new Teacher(name, age, salary, id);
    this.teachers.push(t);
    }

    async addDepartment(){
        const {name, id} = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: 'Enter Department Name',
        }, 
        {
            name: "id",
            type: "number",
            message: "Enter Department Id"
        }
    ]);

    
    
    let d:Department = new Department(name, id);
    this.departments.push(d);
    }
    

    async addCourse(){
        const {name,id} = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: 'Enter Course name',
        },
        {
            name: 'id',
            type: 'number',
            message: 'Enter Course id'
        }
    ]);
    
    let c:Course = new Course(id, name);
    this.courses.push(c);
    }

    async registerStudentInCourse(){
        const studentNames = getNamesFromObject(this.students);
        const {studentName} = await inquirer.prompt({
            name: "studentName",
            type : "list",
            message: "Select Stduent",
            choices: studentNames
        })

        const selectedStudent = getObjectFromName(this.students, studentName);
        const courseNames = getNamesFromObject(this.courses);
        const {courseName} = await inquirer.prompt({
            name: "courseName",
            type : "list",
            message: "Select Course",
            choices: courseNames
        }) 
        const selectedCourse = getObjectFromName(this.courses, courseName)
        if(selectedCourse && selectedStudent){
            selectedCourse.addStudent(selectedStudent.rollNumber);
            selectedStudent.registerForCourse(selectedCourse.courseId);
        }
         else {
            console.log('Student or Course not found');
         }

    }

    async assignCourseToTeacher(){
        const courseNames = getNamesFromObject(this.courses);
        const {selectedCourseName} = await inquirer.prompt({
            name: "selectedCourseName",
            type: "list",
            message: "Select course",
            choices: courseNames
        });

        const selectedCourse = getObjectFromName(this.courses, selectedCourseName);

        const teacherNames = getNamesFromObject(this.teachers);
        const {selectedTeacherName} = await inquirer.prompt({
            name: "selectedTeacherName",
            type: "list",
            message: "Select Teacher",
            choices: teacherNames
        });

        const selectedTeacher = getObjectFromName(this.teachers, selectedTeacherName);

        if(selectedCourse && selectedTeacher){
            selectedCourse.assignTeacher(selectedTeacher.teacherId);
            selectedTeacher.assignCourse(selectedCourse.courseId);
            console.log(`${selectedCourseName} is successfully assigned to ${selectedTeacherName}`);
        }
        else{
            console.log("Course or Teacher not found");
        }
    }

    async addCourseToDepartment(){
        const departmentNames = getNamesFromObject(this.departments);
        const {selectedDepartmentName} = await inquirer.prompt({
            name: "selectedDepartmentName",
            type: "list",
            message: "Select Department",
            choices:departmentNames
        });

        const selectedDepartment: Department = getObjectFromName(this.departments, selectedDepartmentName);

        const courseNames = getNamesFromObject(this.courses);
        const {selectedCourseName} = await inquirer.prompt({
            name: "selectedCourseName",
            type: "list",
            message: "Select Course",
            choices: courseNames
        });

        const selectedCourse: Course = getObjectFromName(this.courses, selectedCourseName);

        if(selectedCourse && selectedDepartment){
            selectedCourse.addDepartment(selectedDepartment.deparmentId);
            selectedDepartment.addCourse(selectedCourse.courseId);
            console.log(`${selectedCourseName} has been successfully added to ${selectedDepartmentName}`)
        }
        else{
            console.log('Selecetd Course or department not found');
        }
    }
    async displayStudents(){
        for(let student of this.students){
            let courseNames: string[] = [];
            for(let id of student.courses){ // 1,2,3,
                let course = this.courses.find(course => course.courseId === id);
               if(course){
                courseNames.push(course.name)
               }
            }
            //let courseNames = student.courses.map(course => course.name);
            console.log("Student Name: ", student.name, "\n",
            "Student Age:", student.age, "\n", "Student Roll Number:", student.rollNumber, "\n",
            "Student Courses:", courseNames.join(","))
        }
    }
    async displayTeacherDetails(){
        for(let teahcer of this.teachers){
            let courseNames: string[] = [];
            for(let id of teahcer.courses){ // 1,2,3,
                let course = this.courses.find(course => course.courseId === id);
               if(course){
                courseNames.push(course.name)
               }
            }
            // let courseNames = teahcer.courses.map(course => course.name);
            console.log("Teahcer Name: ", teahcer.name, "\n",
            "Teacher Id:", teahcer.teacherId, "\n",
            "Teacher Age:", teahcer.age, "\n", "Teacher Salary:", teahcer.salary, "\n",
            "Teahcers Courses:", courseNames.join(","))
        }
    }
    async displayCourses(){
        for(let course of this.courses){
            let studentNames = [];
            let teacherNames = [];
            for(let id of course.students){
                let student = this.students.find(student => student.rollNumber === id);
                studentNames.push(student?.name)
            }
            for(let id of course.teachers){
                let teacher = this.teachers.find(teacher => teacher.teacherId === id);
                teacherNames.push(teacher?.name)
            }

            console.log("Course Name: ", course.name, "\n",
            "Course ID:", course.courseId, "\n",
            "Course Teachers", teacherNames.join(","), "\n",
            "Students enrolled in course:", studentNames.join(","));
        }
    }

   async displayDepartmentDetails(){
    for(let department of this.departments){

        let courseNames: string[] = [];
            for(let id of department.courses){ // 1,2,3,
                let course = this.courses.find(course => course.courseId === id);
               if(course){
                courseNames.push(course.name)
               }
            }
        //let courseNames = department.courses.map(course => course.name)
        console.log("Department Name:", department.name,"\n",
        "Department Courses:", courseNames.join(","))
    }
   }

}

let sms = new StudentManagementSystem();
sms.start();

