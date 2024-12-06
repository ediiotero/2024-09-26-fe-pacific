//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static sleep(number) {
        console.log(`Slept ${number} of hours`)
    }
 
     hello() {
        console.log(`Hello my name is ${this.name}`)
     }
}

// const person1 = new Person('Bruce', 33)
// const person2 = new Person('Stephanie', 55)
// console.log(person1)
// console.log(person2)
// person1.hello()
// person2.hello()

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age)
        this.gpa = gpa
    }

    hello() {
        console.log(`My gpa is ${this.gpa}`)
    }
}

const student1 = new Student('Tobi', 4, '3.0')
console.log(student1)
student1.hello()

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize
    }

    hello() {
        super.hello()
        console.log(`My class size is ${this.classSize}`)
    }
}

const teacher1 = new Teacher('Peter', 55, 10)
console.log(teacher1)
teacher1.hello()

Person.sleep(12)