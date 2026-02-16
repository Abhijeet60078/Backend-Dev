import { getEmployees, saveEmployees } from "../model/employeeModel.js";

const calculateSalary = (basic) => {
    const hra = basic * 0.20;
    const da = basic * 0.10;
    const pf = basic * 0.05;
    const netSalary = basic + hra + da - pf;
    return { basic, hra, da, pf, netSalary };
};

export const createEmployee = async (req, res, next) => {
    try {
        const { name, email, department, basicSalary, joiningDate } = req.body;
        
        // Validation
        if (!name || !email || !department || !basicSalary || !joiningDate) {
            return res.status(400).json({ 
                success: false,
                message: "Missing required fields: name, email, department, basicSalary, joiningDate" 
            });
        }
        
        if (basicSalary <= 0) {
            return res.status(400).json({ 
                success: false,
                message: "Basic salary must be greater than 0" 
            });
        }
        
        const employees = await getEmployees();
        const newEmployee = { 
            id: Date.now(), 
            name,
            email,
            department,
            basicSalary,
            joiningDate
        };
        employees.push(newEmployee);
        await saveEmployees(employees);
        
        res.status(201).json({ 
            success: true,
            message: "Employee created successfully",
            data: newEmployee 
        });
    } catch (err) {
        console.error("Error creating employee:", err);
        res.status(500).json({ 
            success: false,
            message: "Error creating employee",
            error: err.message 
        });
    }
};

export const getAllEmployees = async (req, res, next) => {
    try {
        const employees = await getEmployees();
        res.status(200).json({ 
            success: true,
            message: `Retrieved ${employees.length} employees`,
            data: employees,
            count: employees.length
        });
    } catch (err) {
        console.error("Error retrieving employees:", err);
        res.status(500).json({ 
            success: false,
            message: "Error retrieving employees",
            error: err.message 
        });
    }
};

export const getEmployeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ 
                success: false,
                message: "Employee ID is required" 
            });
        }
        
        const employees = await getEmployees();
        const employee = employees.find(e => e.id == id);
        
        if (!employee) {
            return res.status(404).json({ 
                success: false,
                message: `Employee with ID ${id} not found` 
            });
        }
        
        res.status(200).json({ 
            success: true,
            message: "Employee retrieved successfully",
            data: employee 
        });
    } catch (err) {
        console.error("Error retrieving employee:", err);
        res.status(500).json({ 
            success: false,
            message: "Error retrieving employee",
            error: err.message 
        });
    }
};

export const updateEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ 
                success: false,
                message: "Employee ID is required" 
            });
        }
        
        const employees = await getEmployees();
        const index = employees.findIndex(e => e.id == id);
        
        if (index === -1) {
            return res.status(404).json({ 
                success: false,
                message: `Employee with ID ${id} not found` 
            });
        }
        
        // Validate salary if provided
        if (req.body.basicSalary && req.body.basicSalary <= 0) {
            return res.status(400).json({ 
                success: false,
                message: "Basic salary must be greater than 0" 
            });
        }
        
        employees[index] = { ...employees[index], ...req.body };
        await saveEmployees(employees);
        
        res.status(200).json({ 
            success: true,
            message: "Employee updated successfully",
            data: employees[index] 
        });
    } catch (err) {
        console.error("Error updating employee:", err);
        res.status(500).json({ 
            success: false,
            message: "Error updating employee",
            error: err.message 
        });
    }
};

export const deleteEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ 
                success: false,
                message: "Employee ID is required" 
            });
        }
        
        const employees = await getEmployees();
        const index = employees.findIndex(e => e.id == id);
        
        if (index === -1) {
            return res.status(404).json({ 
                success: false,
                message: `Employee with ID ${id} not found` 
            });
        }
        
        const deletedEmployee = employees[index];
        const filtered = employees.filter(e => e.id != id);
        await saveEmployees(filtered);
        
        res.status(200).json({ 
            success: true,
            message: "Employee deleted successfully",
            data: deletedEmployee 
        });
    } catch (err) {
        console.error("Error deleting employee:", err);
        res.status(500).json({ 
            success: false,
            message: "Error deleting employee",
            error: err.message 
        });
    }
};

export const getPayroll = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ 
                success: false,
                message: "Employee ID is required" 
            });
        }
        
        const employees = await getEmployees();
        const employee = employees.find(e => e.id == id);
        
        if (!employee) {
            return res.status(404).json({ 
                success: false,
                message: `Employee with ID ${id} not found` 
            });
        }
        
        const salaryDetails = calculateSalary(employee.basicSalary);
        
        res.status(200).json({ 
            success: true,
            message: "Payroll calculated successfully",
            data: {
                employeeId: employee.id,
                name: employee.name,
                email: employee.email,
                department: employee.department,
                ...salaryDetails
            }
        });
    } catch (err) {
        console.error("Error calculating payroll:", err);
        res.status(500).json({ 
            success: false,
            message: "Error calculating payroll",
            error: err.message 
        });
    }
};

export const getEmployeesBySalary = async (req, res, next) => {
    try {
        const minSalary = parseInt(req.query.minSalary) || 0;
        const maxSalary = parseInt(req.query.maxSalary) || Infinity;
        
        if (minSalary < 0 || maxSalary < 0) {
            return res.status(400).json({ 
                success: false,
                message: "Salary range must be positive values" 
            });
        }
        
        const employees = await getEmployees();
        const filtered = employees.filter(e => e.basicSalary >= minSalary && e.basicSalary <= maxSalary);
        
        if (filtered.length === 0) {
            return res.status(404).json({ 
                success: false,
                message: `No employees found in salary range: ${minSalary} - ${maxSalary}` 
            });
        }
        
        res.status(200).json({ 
            success: true,
            message: `Found ${filtered.length} employees in salary range`,
            salaryRange: { min: minSalary, max: maxSalary },
            data: filtered,
            count: filtered.length
        });
    } catch (err) {
        console.error("Error filtering by salary:", err);
        res.status(500).json({ 
            success: false,
            message: "Error filtering employees by salary",
            error: err.message 
        });
    }
};
