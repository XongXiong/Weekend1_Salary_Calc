//Constructor for new employees
var Employee = function(firstName, lastName, eID, jobTitle, annSal){
  this.firstName = firstName;
  this.lastName = lastName;
  this.eID = eID;
  this.jobTitle = jobTitle;
  this.annSal = annSal;
};
var sampleEmployee = new Employee ('John', 'Smith', 123456, 'CEO', 300000);
//mCost used to calculate monthly cost of all employees
var employees = [sampleEmployee];
var mCost = employees[0].annSal/12;
var empArr = [];
$(document).ready(main);

function main(){
  $().ready(sample);
  $('.submit').on('click', makeNewEmp);
  $('#monCost').replaceWith("<h2 id='monCost'>Average Monthly Cost = " + mCost + "</h2>");

}

function makeNewEmp(){
  firstName = $('.firstName').val();
  lastName = $('.lastName').val();
  eID = parseInt($('.eID').val());
  jobTitle = $('.jobTitle').val();
  annSal = parseInt($('.annSal').val());
  for (var j = 0; j < employees.length; j++) {
    empArr = employees[j];
    employees[j] = new Employee(firstName, lastName, eID, jobTitle, annSal);
  }

  for (var i = 0; i < employees.length; i++) {
    empArr = employees[i];
    mCost = Math.floor(mCost + empArr.annSal / employees.length / 12);
    console.log(empArr.annSal);
    console.log(employees[i]);
    $('.tBody').append('<tr><td>' + empArr.firstName + '</td><td>' + empArr.lastName + '</td><td>' + empArr.eID +
    '</td><td>' + empArr.jobTitle + '</td><td>' + empArr.annSal + '</td></tr>');

    $('#monCost').replaceWith("<h2 id='monCost'>Average Monthly Cost = " + mCost + "</h2>");
    console.log(mCost);
    return mCost;
  }
}

function sample(){
  $('.tBody').append('<tr><td>' + employees[0].firstName + '</td><td>' + employees[0].lastName + '</td><td>' + employees[0].eID +
  '</td><td>' + employees[0].jobTitle + '</td><td>' + employees[0].annSal + '</td></tr>');
}
