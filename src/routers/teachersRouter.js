const router = require("express").Router();
const teachersController = require("../controllers/teachersController");

router.get("/teachers", teachersController.getAllTeachers);

module.exports = router;
