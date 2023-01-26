const studentsModel = require("../models/studentsModel");
require("../models/teachersModel");
require("../models/studentClassesModel");

const getAllStudents = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = Number(page - 1) * limit;

  try {
    const getAllStudents = await studentsModel
      .find({})
      .populate("class")
      .populate("teacher")
      .limit(limit)
      .skip(skip);
    return res.status(200).json({
      success: true,
      data: getAllStudents,
    });
  } catch (error) {
    return serverErrorHandler(res);
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const getStudent = await studentsModel
      .findById(id)
      .populate("class")
      .populate("teacher");
    if (getStudent) {
      return res.status(200).json(getStudent);
    } else {
      return res.status(404).json({
        success: false,
        message: "No Records Found!",
      });
    }
  } catch (error) {
    return serverErrorHandler(res);
  }
};

const addStudent = async (req, res) => {
  try {
    const _sameStudent = await studentsModel.findOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      class: req.body.class,
      teacher: req.body.teacher,
    });
    if (_sameStudent) {
      return res.status(400).json({
        success: false,
        message: "A record exists with the given firstName and lastName!",
      });
    }

    const addStudent = new studentsModel(req.body);
    await addStudent
      .save()
      .then(() => {
        return res.status(201).json(addStudent);
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "An error occurred while adding a record. Error: " + err,
        });
      });
  } catch (error) {
    return serverErrorHandler(res);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const updateStudent = await studentsModel.findByIdAndUpdate(id, req.body);
    if (updateStudent) {
      return res.status(200).json({
        success: true,
        message: "The record has been updated ...",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Couldn't update record!",
      });
    }
  } catch (error) {
    return serverErrorHandler(res);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStudent = await studentsModel.findByIdAndDelete(id);
    if (deleteStudent) {
      return res.status(200).json({
        success: true,
        message: "The record has been deleted ...",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Couldn't delete record!",
      });
    }
  } catch (error) {
    return serverErrorHandler(res);
  }
};

const serverErrorHandler = (response) => {
  return response.status(500).json({
    success: false,
    message: "Service error: " + error,
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
