class Person {

    constructor(
        protected firstName: string, 
        protected lastName: string, 
        protected age: number
        ){}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const person: Person = new Person('John', 'Doe', 25);
console.log(person.getFullName())



class Employee extends Person {

    get employeeId(): number {
        return this.id;
    }

    set employeeId(employeeId: number) {
        this.id = employeeId;
    }


    constructor(
        protected id: number,
        protected middleName: string,
        firstName: string, 
        lastName: string, 
        age: number
        ){
            super(firstName, lastName, age)
        }

        getFullName(): string {

            //* If using data modifier - protected 
            //* const nameSegments: Array<string> = super.getFullName().split(' ');
            //* nameSegments.splice(1, 0, this.middleName);
            //* const fullName = nameSegments.join(' ');
            //* return `${fullName}`;

            //* using protected - can reach all the classes normally
            return `${this.firstName} ${this.middleName} ${this.lastName}`
    
        }
    }

    
    const manager: Employee = new Employee(1, 'Middle', 'John', 'Last', 25);
    console.log(`${manager.getFullName()}`)

    //* Get
    console.log(manager.employeeId);
    //* Set
    manager.employeeId = 20
    console.log(manager.employeeId);