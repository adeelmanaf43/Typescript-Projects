// type Student = {
//     name: string;
//     id:number;

//     studentDetails:() => void;
        
    
// }

// interface Student2{
//     name: string,
//     id: number,
//     course: string,

//     studentDetails():void
// }

// let s: Student2 = {
//     name: "Adeel",
//     id: 1,
//     course: 'javascript',

//     studentDetails(){
//         console.log(`Name: ${this.name} id: ${this.id} course: ${this.course}`);
//     }
// }

// s.studentDetails();


// interface Book {
//     readonly author: string,
//     pages: number;
// }

// const ok:Book = {
//    author: "Adeel",
//    pages: 10,
// }

// console.log(ok.author);

// console.log(ok.pages);

// ok.pages = 20;


// interface Page {
//     readonly text: string;
// }


// function read(page: Page){
//     console.log(page.text);

//     page.text += "I";
// }


// const page2 = {
//     text: "Hello World"
// }

// read(page2);


// method, property


// interface ABC {
//     name: string;
//     property: () => string;
//     method(): string;
// }


// let a: ABC  = {
//     name: "Adeel",
//     property: () => {
//         return "Property"
//     },
//     method() {
//         return "Method"
//     }
// }

// console.log(a.property());

// console.log(a.method());


// interface CallSignature {
//     (input:string): number;
// }


// let a: CallSignature = function(input){
//     return input.length;
// }

//  console.log(a("Adeel"));


// interface FunctionWithCount {
//     count: number;
//     (): void;
// }

// let hasCallCount: FunctionWithCount;


// function keepTrackOfCalls() {
//     keepTrackOfCalls.count += 1;
//     console.log(`I have been called ${keepTrackOfCalls.count} times`);
// }


// keepTrackOfCalls.count = 0;

// hasCallCount = keepTrackOfCalls;

// for(let i = 0; i < 10; i++){
//     hasCallCount();
// }

// let currency: = {
//     usd: {
//         pkr: 290,
//         inr: 100,
//         sar: 4.5,
//         gbp: 0.9,
//         eur: 0.96
//     }
// }

// interface wordCounts {
//     [i:string]: number;
// }


// let w: wordCounts = {
//     id: 2,
//     date: 28,
//     month: "7",
//     year: 2023,

// }



// interface W {
//     [i:number]: number
// }


// let w: W = {
//     1:1, 
//     2:2,
//     3:
// }


// interface Setting {
//     place: string,
//     year: number
// }



// interface Novel {
//     author: {
//         name: string,
//     },
//     setting: Setting
// }


// let myNovel: Novel;


// myNovel = {
//     author: {
//         name: "Adeel",
//     },
//     setting: {
//         place: 'Lahore',
//         year: 2023,
//     }
// }
    

// console.log(myNovel.setting.year)


// interface Person {
//     name: string,
// }

// interface Address {
//     province: string,
//     city: string,
//     sector: string,
//     streetNumber: Number,
// }


// interface Student extends Person, Address {
//     name:  string,
//     id: number,
//     course: string,
// }


// let s: Student = {
//     name: 'Adeel',
//     province: "AJK",
//     city : "Mirpur",
//     sector: "F",
//     streetNumber: 1,
//     id: 1,
//     course: 'Javascript',
// }


// interface Teacher extends Person {
//     department: string,
//     salary: number
// }

// let t: Teacher = {
//     name: 'Aqeel',
//     address: 'Mirpur',
//     department: 'IT',
//     salary: 50000
// }


// interface A {
//     firstName: string;
// }

// interface A {
//     lastName: string;
// }


// let a: A = {
//     firstName: "Adeel",
//     lastName: "Manaf",

// }



// interface MergedProperties {
//     same: (input: boolean) => string;
//     different: (input:string) => string;
// }


// interface MergedProperties{
//     same: (input: boolean) => string;
//     different: (input: number) => string;
// }

// interface MergedMethod {
//     different(input:string): string;
// }

// interface MergedMethod{
//     different(input:number): number;
// }