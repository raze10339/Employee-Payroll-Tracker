// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray=[]
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee object
  let repeatInput=true
    while(repeatInput) {
let userFirst=window.prompt("please enter first name");
let userLast=window.prompt("please enter last name");
let userSalary=parseFloat(prompt("please enter salary"));
if(isNaN(userSalary)) {
    userSalary = 0;
}
let employee={firstName:userFirst, lastName:userLast, salary:userSalary}
employeesArray.push(employee)
repeatInput=window.confirm("Add another?");
    }
    return employeesArray
  }


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary=0
  for(let i=0; i<employeesArray.length; i++ ){
    totalSalary+=employeesArray[i].salary;
  }
let avgSal=totalSalary/employeesArray.length;
console.log(`The average salary of the employees is $ ${avgSal}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randEmp =Math.floor(Math.random()* (employeesArray.length));
  let winner=employeesArray[randEmp];
  console.log(`congrats to {winner.firstName} ${winner.lastName} for evading arrest`) 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);