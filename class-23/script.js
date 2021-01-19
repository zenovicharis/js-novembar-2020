var numbers = [1, 2, 3 ,4 ,5];
var additionalNumber = 6;


// numbers.push(additionalNumber);

// var newArray = new Array()


var newNiz = [
    additionalNumber,
    ...numbers,
];

var [num, ...rest] = numbers;

const Vue = {
    createApp: function () {...Vue.},
    defineAsyncComponent: function () {},
    title: "asdasdasd",
}

const {title} = Vue
console.log(title);


console.log(num, rest);



