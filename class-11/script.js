// console.log(data);

function getData() {
    document.cookie = "_ga=GA1.2.533161516.1605897927; session=53616c7465645f5fcbee9df663f4a3f64585374cfe22ce6ad56ec0bf90b845179129909c267eac74c06101e2eeeb65a5; _gid=GA1.2.885096163.1606907634";
    var request = new XMLHttpRequest();
    request.withCredentials = true;
    request.open("GET", "https://adventofcode.com/2020/day/1/input");
    request.setRequestHeader("Origin", '*');
    // request.setRequestHeader(cookie, "_ga=GA1.2.533161516.1605897927; session=53616c7465645f5fcbee9df663f4a3f64585374cfe22ce6ad56ec0bf90b845179129909c267eac74c06101e2eeeb65a5; _gid=GA1.2.885096163.1606907634");
    request.addEventListener("load", function(response) {
        debugger;
        console.log(response)
    });
    request.send();
}

getData();

// var smallData = `1721
// 979
// 366
// 299
// 675
// 1456`;

var parsedData = data.split("\n").map(a => parseInt(a));

// var intArr = [];
// for(var i = 0; i < parsedData.length; i++) {
//     var b = parseInt(parsedData[i]);
//     intArr.push(b);
// }
// console.log(parsedData, intArr);


function find2020Couple(input) {
    for(var i = 0; i < input.length; i++) {
        for(var j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === 2020) {
                return [input[i], input[j]];
            }
        }
    }
}

var resultArr = find2020Couple(parsedData);

console.log(resultArr, resultArr[0] + resultArr[1], resultArr[0] * resultArr[1])