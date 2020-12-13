//exercise 7
const employees = {
    ax01 : {name: 'Ray', age: 28, salary: 1300},
    qs84 : {name: 'Lucius', age: 31, salary: 840},
    bg33 : {name: 'Taylor', age: 18, salary: 2700},
}

findEmployeeSalary  = employeeID => employees[employeeID].salary

console.log(findEmployeeSalary('bg33'))