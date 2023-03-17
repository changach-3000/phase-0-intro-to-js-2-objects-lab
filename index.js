// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const update2 = {... employee};
    update2[key] = value;
    return update2;
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee};
    delete newemployee[key];
    return newemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}


