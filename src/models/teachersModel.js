const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema(
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
  },
  { collection: "Teachers" }
);

const teachers = mongoose.model("Teachers", teachersSchema);

module.exports = teachers;
