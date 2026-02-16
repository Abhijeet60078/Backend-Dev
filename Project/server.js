import express from "express";
import employeeRouter from "./router/employeeRouter.js";

const app = express();

// Middleware
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    
    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
    
    // Track response
    res.on('finish', () => {
        console.log(`[${timestamp}] Response Status: ${res.statusCode}`);
    });
    
    next();
});

// API Root - Documentation route
app.get("/api", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Employee Payroll System API",
        version: "1.0.0",
        baseURL: "http://localhost:5000/api",
        endpoints: {
            employees: {
                "GET /api/employees": "Get all employees",
                "GET /api/employees/:id": "Get employee by ID",
                "POST /api/employees": "Create new employee",
                "PUT /api/employees/:id": "Update employee by ID",
                "DELETE /api/employees/:id": "Delete employee by ID",
                "GET /api/employees/:id/payroll": "Get payroll details for employee",
                "GET /api/employees/salary?minSalary=X&maxSalary=Y": "Filter employees by salary range"
            }
        },
        documentation: "Visit http://localhost:5000/api/employees to get all employees"
    });
});

// Routes
app.use("/api/employees", employeeRouter);

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({ 
        message: "Route not found",
        path: req.url,
        method: req.method
    });
});

// Error Handling Middleware (Must be last)
app.use((err, req, res, next) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${err.message}`);
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({ 
        success: false,
        message: message,
        statusCode: statusCode,
        timestamp: new Date().toISOString()
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
   
    console.log(`Base URL: http://localhost:${PORT}/api`);
    
});
