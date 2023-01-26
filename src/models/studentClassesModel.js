const mongoose = require("mongoose");

const studentClassesSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { collection: "StudentClasses" }
);

const studentClasses = mongoose.model("StudentClasses", studentClassesSchema);

module.exports = studentClasses;
