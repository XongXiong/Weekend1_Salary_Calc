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
console.log(employees);
//mCost used to calculate monthly cost of all employees
var mCost = 0;

$(document).ready(main);

function main(){
  $('.submit').on('click', makeNewEmp);
}

function makeNewEmp(){
  var employee = employees[j];
  firstName = $('.firstName').val();
  lastName = $('.lastName').val();
  eID = parseInt($('.eID').val());
  jobTitle = $('.jobTitle').val();
  annSal = parseInt($('.annSal').val());
  for (var j = 0; j < employees.length; j++) {
    employees[j] = new Employee(firstName, lastName, eID, jobTitle, annSal);
    console.log(firstName);
  }
  for (var i = 0; i < employees.length; i++) {
    var empArr = employees[i];
    $('.tBody').append('<tr><td>' + empArr.firstName + '</td><td>' + empArr.lastName + '</td><td>' + empArr.eID +
    '</td><td>' + empArr.jobTitle + '</td><td>' + empArr.annSal + '</td></tr>');
  }
}
