// Prvi nacin kreiranja objekta
function Student (firstName, lastName, department, age, id, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.age = age;
    this.id = id;
    this.gender = gender;
}



var haris = new Student("Haris", "Zenovic", "IT", 27, "1213B06", "male");
// console.log(haris)

// Drugi nacin kreiranja objekta
var computerScience = {
    exam: "CS",
    date: "23.11.2020",
    score: 0,
    studentId: null,
    fillStudentData: function(student, score) {
        this.score = score;
        this.studentId = student.id;
        this.exam = this.exam;
        this.data = this.date;
    }
};

var studentResult = Object.create(computerScience);

studentResult.fillStudentData(haris, 56);

console.log(studentResult);




var students = [
    new Student("Haris", "Zenovic", "IT", 27, "1213B06", "male"),
    new Student("Marko", "Milenkovic", "IT", 27, "1213B06", "male"),
    new Student("Vahid", "Konicanin", "IT", 27, "1213B06", "male"),
    new Student("Omer", "Bisevac", "IT", 27, "1213B06", "male"),
    new Student("Milos", "Petrovic", "IT", 27, "1213B06", "male"),
    new Student("Ajla", "Rasljanin", "IT", 27, "1213B06", "female"),
    new Student("Jane", "Doe", "IT", 27, "1213B06", "female"),
    new Student("Ana", "Smit", "IT", 27, "1213B06", "female"),
    new Student("Ivana", "Milosevic", "IT", 27, "1213B06", "female"),
];

var male = 0;
var female = 0;

for(var i = 0; i < students.length; i++) {
    if (students[i].gender === "male") {
        male++;
    } else {
        female++;
    }
}

// Filter

console.log(male, female);
var femaleStudents = new Array();
for(var student of students) {
    if (student.gender === "female") {
        femaleStudents.push(student);
    }
}
console.log(femaleStudents);
var filterFemaleStudents = function(student) {
    if (student.gender === "female") {
        return true;
    }
    return false;
}
var femStud = students.filter(filterFemaleStudents);

var femStud = students.filter(student => student.gender === "female");

console.log(femStud);

// Map
var listOfNames = [];
for(var student of femStud) {
    listOfNames.push(`${student.firstName} ${student.lastName}`);
}

console.log(listOfNames);

var listOfNamesTwo = femStud.map(student => `${student.firstName} ${student.lastName}`);

var examSheet = students.map(student => {
    var exam = Object.create(computerScience);
    exam.fillStudentData(student, Math.floor(Math.random() * 100));
    return exam
});

console.log(examSheet);

console.log(listOfNamesTwo);

// Reduce
var totalScore = 0;
for(var exam of examSheet) {
    totalScore += exam.score;
}

console.log(totalScore);

var maxScore = examSheet.reduce(function(acc, exam) {
    acc += exam.score;
    return acc;
}, 0);

console.log(maxScore);


// Search example

var totalNumberOfCharsInFullname = students.filter(student => student.firstName.toLowerCase().includes("a"))
                                .map(student => `${student.firstName} ${student.lastName}`)
                                .reduce((acc, s) => {
                                    acc += s.split(" ").join().length;
                                    return acc
                                } ,0);
console.log(totalNumberOfCharsInFullname);










