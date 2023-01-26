const teachersModel = require("../models/teachersModel");

const getAllTeachers = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = Number(page - 1) * limit;

  try {
    const getAllTeachers = await teachersModel
      .find({})
      .limit(limit)
      .skip(skip);
    return res.status(200).json({
      success: true,
      data: getAllTeachers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Service error: " + error,
    });
  }
};

module.exports = {
    getAllTeachers,
};
