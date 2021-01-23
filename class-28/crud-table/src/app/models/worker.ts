export class Worker {
    name: string;
    surname: string;
    age: number;
    department: string;
    constructor(name: string, surname: string, age: number, department: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.department = department;
    }

    static initWorker(): Worker {
        return new Worker("", "", 0, "");
    }
}


export class WorkerTwo {
    name: string;
    surname: string;
    age: number;
    department: string;
    constructor(name: string, surname: string, age: number, department: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.department = department;
    }

    static initWorker(): Worker {
        return new Worker("", "", 0, "");
    }
}