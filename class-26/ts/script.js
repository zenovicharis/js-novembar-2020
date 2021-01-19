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
var message = "This is my First TS code";
var capitalize = function (name) {
    var firstLetter = name.split("")[0].toLowerCase();
    return firstLetter + name.slice(0, 1);
};
capitalize(9);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.doSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(sound) {
        var _this = _super.call(this) || this;
        _this.sound = sound;
        return _this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(sound) {
        var _this = _super.call(this) || this;
        _this.sound = sound;
        return _this;
    }
    return Dog;
}(Animal));
var myCat = new Cat("Maow");
myCat.doSound();
var myDog = new Dog("Wooof!");
myDog.doSound();
console.log(message);
