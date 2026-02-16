import express from "express";
import * as controller from "../controller/employeeController.js";

const router = express.Router();

router.post("/", controller.createEmployee);
router.get("/salary", controller.getEmployeesBySalary);
router.get("/", controller.getAllEmployees);
router.get("/:id", controller.getEmployeeById);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);
router.get("/:id/payroll", controller.getPayroll);

export default router;
