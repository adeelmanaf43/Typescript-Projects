// // // // // Encapsulation //

// // // // class Person {
// // // //     private name: string;

// // // //     constructor(name: string){
// // // //         this.name = name;
// // // //     }

// // // // }

// // // // class Student extends Person {
// // // //     id:number;

// // // //     constructor(name:string, id: number){
// // // //         super(name);
// // // //         this.id = id;
// // // //     }

// // // //     displayStudentDetails() {
// // // //         console.log("Student Name:",this.name, "\n",
// // // //             "Student id", this.id, )
// // // //     }
// // // // }

// // // // let s = new Student("Adeel", 1);

// // // // s.



// // class BankAccount {
// //     private _balance: number;

// //     constructor(initialBalance: number){
// //         if(initialBalance < 0){
// //             throw new Error("Initial balance must be positive");
// //         }
// //         this._balance = initialBalance;
// //     }

// //     get balance(): number {
// //         return this._balance
// //     }
// //     set balance(amount:number){
// //         if(amount < 0) {
// //             console.log("Balance must be positive");
// //         }
// //         else{
// //             this._balance = amount;
// //         }
       
// //     }

// //     withdraw(amount: number): void{
// //         if(amount > this._balance){
// //             console.error("Insufficient balance")
// //         } else {
// //             this._balance -= amount;
// //         }
// //     }

// //     deposit(amount: number):void{
// //         this._balance += amount;
// //     }


// // }

// // const account = new BankAccount(100);

// // console.log(account.balance);

// // account.balance = -20;

// // console.log(account.balance);


// // // class BankAccount {
// // //     public balance: number;
  
// // //     constructor(initialBalance: number) {
// // //       if (initialBalance < 0) {
// // //         throw new Error('Initial balance must be non-negative.');
// // //       }
// // //       this.balance = initialBalance;
// // //     }
  
// // //     // Method to withdraw money with validation
// // //     withdraw(amount: number): void {
// // //       if (amount > this.balance || amount < 0) {
// // //         console.error('Invalid withdrawal amount.');
// // //       } else {
// // //         this.balance -= amount;
// // //       }
// // //     }
  
// // //     // Method to deposit money
// // //     deposit(amount: number): void {
// // //       this.balance += amount;
// // //     }
// // //   }
  
// // //   const account = new BankAccount(100);
// // //   console.log(account.balance)
// // //   account.balance = -10; // This is allowed because balance is public
// // //   console.log(account.balance); // Outputs -10
  


// class Student {
//     name: string;
//     rollNumber: number;
//    static id: number = 10000;

//     constructor(name: string) {
//         this.name = name;
//         this.rollNumber = Student.id;
//         Student.id++;
//     }

//     printDetails(){
//         console.log(`Student Name: ${this.name}
//         Student RollNumber: ${this.rollNumber}`);
//     }
// }


// let s1 = new Student("Adeel");
// let s2 = new Student("Aqeel");

// s1.printDetails();
// s2.printDetails();


// // class Student2 {
// //     name: string;
// //     age: number
// //     // Static field to keep track of the roll number
// //     private static nextRollNumber: number = 1;
  
// //     // Instance variable to hold the roll number for each student
// //     public readonly rollNumber: number;
  
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //       // Assign the current value of the static nextRollNumber to this student's roll number
// //       this.rollNumber = Student2.nextRollNumber;
  
// //       // Increment the static nextRollNumber for the next student
// //       Student2.nextRollNumber++;
// //     }
  
// //     // Method to print the student's details
// //     public printDetails() {
// //       console.log(`Name: ${this.name}, Age: ${this.age}, Roll Number: ${this.rollNumber}`);
// //     }
// //   }
  
// //   const student1 = new Student2('Alice', 20);
// //   const student2 = new Student2('Bob', 22);


  
// //   student1.printDetails(); // Output: Name: Alice, Age: 20, Roll Number: 1
// //   student2.printDetails(); // Output: Name: Bob, Age: 22, Roll Number: 2
  


// class Teacher {
//     abstract a: string;
// }


// let t: Teacher;

// t = new Student();


// Okay, Error

abstract class Person {
    abstract name: string;
    age: number;

    constructor( age:number){
        this.age = age;
    }

    displayDetails() {
        console.log("Person Name:", this.name, "\n",
        "Person Age:", this.age)
    }

    abstract displayDetails2(): void;


}

class Student extends Person {
    static id: number = 1000;
    rollNumber: number;
    name: string;

    constructor(name: string, age:number){
        super(age);
        this.rollNumber = Student.id;
        Student.id++;
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log("Student Name:", this.name, "\n",
        "Student Age:", this.age, "\n",
        "Student Roll Number:", this.rollNumber)   
    }
    displayDetails2(): void {
        console.log("Student Name:", this.name, "\n",
        "Student Age:", this.age, "\n",
        "Student Roll Number:", this.rollNumber)
    }

    }


    let s1 = new Student("Adeel", 13);

    let s2 = new Student("Aqeel", 10);

    let s3 = new Student("Ali", 15);

    s1.displayDetails();

    s2.displayDetails2();

    s3.displayDetails();