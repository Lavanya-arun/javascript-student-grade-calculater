let marks = 85;
let bonus = 5;

marks += bonus;

let grade;
let remarks;

if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 70 && marks < 90) {
    grade = "B";
}
else if (marks >= 50 && marks < 70) {
    grade = "C";
}
else if (marks >= 0 && marks < 50) {
    grade = "F";
}
else {
    console.log("Invalid marks!");
}

let result = marks >= 50 && marks <= 100 ? "Pass" : "Fail";

switch (grade) {
    case "A":
        remarks = "Excellent";
        break;

    case "B":
        remarks = "Good";
        break;

    case "C":
        remarks = "Average";
        break;

    case "F":
        remarks = "Need improvement";
        break;

    default:
        remarks = "Invalid grade!";
}

console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remarks);