class Person {

    constructor(
        private firstName: string, 
        private lastName: string, 
        private age: number
        ){}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const person: Person = new Person('John', 'Doe', 25);
console.log(person.getFullName())



class Employee extends Person {

    constructor(
        private id: number,
        private middleName: string,
        firstName: string, 
        lastName: string, 
        age: number
        ){
            super(firstName, lastName, age)
        }

        getFullName(): string {
            const nameSegments: Array<string> = super.getFullName().split(' ');
            nameSegments.splice(1, 0, this.middleName);
            const fullName = nameSegments.join(' ');
            return `${fullName}`;
    
        }
    }

    


    const manager: Person = new Employee(1, 'Middle', 'John', 'Last', 25);
    console.log(`${manager.getFullName()}`)
