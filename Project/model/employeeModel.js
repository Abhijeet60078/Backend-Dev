import employees from "./data.js";

let employeeList = [...employees];

const getEmployees = async () => {
    return employeeList;
};

const saveEmployees = async (updatedEmployees) => {
    employeeList = updatedEmployees;
};

export { getEmployees, saveEmployees };
