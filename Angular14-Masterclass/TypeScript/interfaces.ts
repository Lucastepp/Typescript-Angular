interface Human {
    age: number;
    walk(): void;
}

interface Person extends Human {
    firstName: string;
    lastName: string;
}

// For Objects

const user: Person = {
    firstName: '',
    lastName: '',
    age: 10,
    walk: () => {
        return;
    }
}

// For classes

class Employee implements Person {
    firstName = '';
    lastName: '';
    age = 10;
    walk(): void {
        return;
    }
}
