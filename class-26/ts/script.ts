const message = "This is my First TS code";

const capitalize = function(name:any): string {
    var firstLetter = name.split("")[0].toLowerCase();
    return firstLetter + name.slice(0, 1);
}
capitalize(9);

class Animal {
    constructor(){
        
    }
    sound:string;
    doSound():void {
        console.log(this.sound);
    }
}


class Cat extends Animal {
    constructor(sound:string) {
        super();
        this.sound = sound;
    }
}
class Dog extends Animal {
    constructor(sound:string) {
        super();
        this.sound = sound;
    }
}

const myCat = new Cat("Maow");
myCat.doSound();
const myDog = new Dog("Wooof!");
myDog.doSound();



console.log(message);