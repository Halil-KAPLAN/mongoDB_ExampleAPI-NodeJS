const router = require("express").Router();
const studentController = require("../controllers/studentClassesController");

router.get("/studentClasses", studentController.getAllStudentClasses);

module.exports = router;
