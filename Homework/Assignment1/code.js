// Variables
var score = 89; // The test score
var grade; // The grade of the test score

// Calculate the grade of the test score
grade = (score >= 90) ? "A":
	(score >= 80) ? "B":
	(score >= 70) ? "C":
	(score >= 60) ? "D":"F";

//Output the inputs and the calculation
var str = "<h1>Test Score = " + score + "</h1>";
str += "<h1>Grade = " + grade + "</h1>";
document.write(str);