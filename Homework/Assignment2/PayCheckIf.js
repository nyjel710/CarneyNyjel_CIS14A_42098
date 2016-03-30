// Variables
var hoursWorked = 50; // Total hours worked
var payRate = 10; // Pay rate in dollars per hour
var overtime = 20;// double time occurs
var tripletime = 40;// triple time occurs
var payCheck; // Pay check

//Calculate the Paycheck and determine overtime
if (hoursWorked < overtime) {
	payCheck = hoursWorked * payRate;
}

if (hoursWorked >= overtime && hoursWorked < tripletime) {
	payCheck = overtime * payRate + 2 * payRate * (hoursWorked - overtime);
}

if (hoursWorked >= tripletime) {
	payCheck = tripletime * payRate + 3 * payRate * (hoursWorked - tripletime);
}

// Output inputs and calculation
var str = "<h1>Hours worked = " + hoursWorked + "</h1>";
str += "<h1>Pay Rate = $" + payRate + "/hr</h1>";
str += "<h1>Overtime starts at " + overtime + " hrs</h1>";
str += "<h1>Tripletime starts at " + tripletime + " hrs</h1>";
str += "<h1>Pay Check = $" + payCheck + "</h1>";
document.write(str);