"use strict";
// // interface Person {
// //     name: string;
// //     age: number;
// //     getName(): string;
// // }
// // interface Address {
// //     province: string;
// //     city: string;
// //     getAddress(): string;
// // }
// // class Student implements Person, Address {
// //     name: string;
// //     age: number;
// //     province: string;
// //     city: string;
// //     rollNumber: number;
// //     constructor( name: string, age: number, rollNumber: number, province: string, city: string){
// //         this.name = name;
// //         this.age = age;
// //         this.province = province;
// //         this.city = city
// //         this.rollNumber = rollNumber;
// //     }
// //     getName() {
// //         return this.name;
// //     }
// //     getAddress(): string {
// //         return `${this.city}, ${this.province}`
// //     }
// // }
// // let s = new Student("adeel", 27, 1, "Azad Kashmir", "Mirpur");
// // console.log(s.getAddress());
// class Lesson {
//     subject: string | boolean;
//     defaultLessonTiming(year:number, month:number): string;
//     defaultLessonTiming(year:number, month:number, day:number): string
//     defaultLessonTiming(year: number, month:number, day?:number){
//         if(day){
//             return `${year}-${month}-${day}`
//         }
//         else{
//             return `${year}-${month}`
//         }
//     }
//     constructor(subject: string){
//         this.subject = subject;
//     }
//     LessonTiming(): Date {
//         return new Date();
//     }
// }
// class OnlineLesson extends Lesson {
//     subect: string;
//     url: string;
//     constructor(subject: string, url: string){
//         super(subject);
//         this.subect = subject;
//         this.url = url;
//     }
//     LessonTiming(): Date {
//         return new Date("2020-12-25")
//     }
// }
// class QuickLesson extends OnlineLesson{
//     quick: boolean;
//     constructor(subject: string, url: string, quick: boolean){
//         super(subject, url);
//         this.quick = quick;
//     }
// }
// let lesson: Lesson;
// //lesson = new Lesson("Typescript");
// lesson = new Lesson("Typescript");
// console.log(lesson.defaultLessonTiming(2021, 12, 13));
// //lesson = new QuickLesson("Typescript", "youtube", true)
// //coconsole.log(lesson.LessonTiming());
// let onlineLesson: OnlineLesson;
// onlineLesson = new OnlineLesson("Typescript", 'youtube');
// console.log(onlineLesson.LessonTiming());
// //onlineLesson = new OnlineLesson('Typescript', 'yout);
class School {
    constructor(name) {
        this.name = name;
    }
}
class PreSchool extends School {
    getStudentsTypes() {
        return ["Preschooler"];
    }
}
class PostSchool extends School {
    getStudentsTypes() {
        return ["Postschooler", "Very good School"];
    }
}
let s = new PreSchool("Banni");
let p = new PostSchool("Mirpur");
console.log(s.getStudentsTypes());
console.log(p.getStudentsTypes());
