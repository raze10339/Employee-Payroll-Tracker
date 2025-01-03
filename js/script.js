// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  let repeatInput = true;

  while (repeatInput) {
    let userFirst = window.prompt("Please enter first name");
    let userLast = window.prompt("Please enter last name");
    let userSalary = parseFloat(prompt("Please enter salary"));

    if (isNaN(userSalary)) {
      userSalary = 0;
    }

    let employee = { firstName: userFirst, lastName: userLast, salary: userSalary };
    employeesArray.push(employee);

    repeatInput = window.confirm("Add another?");
  }

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate average salary.");
    return;
  }

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to select a random employee.");
    return;
  }

  let randEmp = Math.floor(Math.random() * employeesArray.length);
  let winner = employeesArray[randEmp];
  console.log(`Congratulations to ${winner.firstName} ${winner.lastName}, our random drawing winner!`);
}

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');

  if (!employeeTable) {
    console.log("Employee table element not found.");
    return;
  }

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  if (employees.length === 0) {
    console.log("No employees added.");
    return;
  }

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a, b) {
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