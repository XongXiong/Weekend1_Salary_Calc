//Constructor for new employees
var Employee = function(firstName, lastName, eID, jobTitle, annSal){
  this.firstName = firstName;
  this.lastName = lastName;
  this.eID = eID;
  this.jobTitle = jobTitle;
  this.annSal = annSal;
};
//Sample Employee
var exampleEmployee = new Employee('John', 'Smith', 123456, 'President', 360000);
//Employee array to hold new inputs
var employees = [exampleEmployee];
//mCost used to calculate monthly cost of all employees
var mCost = 0;

console.log(employees);
$(document).ready(main);

function main(){
  console.log('jquery ready');
}
