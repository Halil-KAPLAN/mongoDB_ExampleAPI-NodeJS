const studentClassesModel = require("../models/studentClassesModel");

const getAllStudentClasses = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = Number(page - 1) * limit;

  try {
    const getAllStudentClasses = await studentClassesModel
      .find({})
      .limit(limit)
      .skip(skip);
    return res.status(200).json({
      success: true,
      data: getAllStudentClasses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Service error: " + error,
    });
  }
};

module.exports = {
  getAllStudentClasses,
};
