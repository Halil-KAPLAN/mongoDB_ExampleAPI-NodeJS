const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const studentsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    teacher: { type: ObjectId, ref: "Teachers" },
    class: { type: ObjectId, ref: "StudentClasses" },
  },
  { collection: "Students" }
);

const students = mongoose.model("Students", studentsSchema);

module.exports = students;
