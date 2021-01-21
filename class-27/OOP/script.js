var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(type, weight) {
        this._type = type;
        this._weight = weight;
    }
    Animal.prototype.getWeight = function () {
        return this._weight;
    };
    Animal.prototype.printWeight = function () {
        console.log("This cats weight is" + this._weight + "kg");
    };
    return Animal;
}());
var Pinguine = /** @class */ (function (_super) {
    __extends(Pinguine, _super);
    function Pinguine(type, weight, speed) {
        var _this = _super.call(this, type, weight) || this;
        _this.slideSpeed = speed;
        return _this;
    }
    Pinguine.prototype.getPinguineData = function () {
        this.printWeight();
    };
    return Pinguine;
}(Animal));
var DomesticCat = /** @class */ (function (_super) {
    __extends(DomesticCat, _super);
    function DomesticCat(type, weight, sound, height) {
        var _this = _super.call(this, type, weight) || this;
        _this._height = height;
        _this._sound = sound;
        return _this;
    }
    DomesticCat.prototype.setHeight = function (newHeight) {
        this._height = newHeight;
    };
    DomesticCat.prototype.getHeight = function () {
        return this._height;
    };
    DomesticCat.prototype.getCatData = function () {
        this.printWeight();
        // private method
        // this.getWeight();
    };
    return DomesticCat;
}(Animal));
var kitty = new DomesticCat("cat", 6, "Meow!", 30);
console.log(kitty.getHeight());
var PudleDog = /** @class */ (function () {
    function PudleDog(height, weight) {
        this.sound = "Wow wow";
        this.height = height;
        this.weight = weight;
    }
    PudleDog.prototype.bark = function () {
        console.log(this.sound);
    };
    PudleDog.prototype.getSound = function () {
        return this.sound;
    };
    return PudleDog;
}());
var connectToDB = function (config) {
    console.log("Connectiong to host " + config.host);
    console.log("On user: " + config.connectionString);
    // console.log("On user: " + config.connectionString);
    if (config.port !== null) {
        console.log("On port " + config.port);
    }
    return config;
};
var connectionData = { connectionString: "asdas", host: "localhost", user: "haris" };
console.log();
connectToDB(connectionData);
var printSomeData = function (input) {
    console.log("This is your input:" + input);
    return 9;
};
var title = document.getElementById("title");
printSomeData(title.textContent);
// class BullDog implements IDog{
// }
var lion = new Animal("cat", 150);
console.log(lion);
