class Animal {
    public _type: string; // ""
    public _weight: number; // 
    constructor(type: string, weight: number) {
        this._type = type;
        this._weight = weight;
    }
    private getWeight(): number {
        return this._weight;
    }

    protected printWeight(): void {
        console.log("This cats weight is"+ this._weight + "kg");
    }
}

class Pinguine extends Animal {
    slideSpeed: number;
    constructor(type: string, weight: number, speed: number) {
        super(type, weight);
        this.slideSpeed = speed;
    }

    public getPinguineData ():void {
        this.printWeight();

    }
}

class DomesticCat extends Animal {
    _sound: string;
    private _height: number;
    constructor(type: string, weight: number, sound:string, height: number) {
        super(type, weight);
        this._height = height;
        this._sound= sound;
    }

    public setHeight(newHeight: number): void {
        this._height = newHeight;
    }

    public getHeight():number {
        return this._height;
    }


    public getCatData(): void {
        this.printWeight();
        // private method
        // this.getWeight();
    }
}

const kitty = new DomesticCat("cat", 6, "Meow!", 30);

console.log(kitty.getHeight());

interface IDog {
    readonly sound: string;
    height: number;
    weight: number;
    bark(): void;
    getSound(): string
}


class PudleDog implements IDog {
    sound: string = "Wow wow";
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
    }
    bark() {
        console.log(this.sound);
    }
    getSound() {
        return this.sound;
    }

}

interface IConfig {
    connectionString: string
    port?: number
    host: string
}

const connectToDB = function(config?: IConfig): IConfig {
    console.log("Connectiong to host " + config.host);
    console.log("On user: " + config.connectionString);
    // console.log("On user: " + config.connectionString);
    if (config.port !== null) {
        console.log("On port " + config.port);
    }

    return config;
}
var connectionData = {connectionString: "asdas", host: "localhost", user: "haris"};
console.log();
connectToDB(connectionData);

const printSomeData: (input: string | number) => number = (input: string | number): number  => {
    console.log("This is your input:" + input);
    return 9
}


var title: HTMLElement = document.getElementById("title");

printSomeData(title.textContent);

// class BullDog implements IDog{

// }


const lion = new Animal("cat", 150);



console.log(lion)
