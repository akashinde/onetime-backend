const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,
  description: {
    type: String,
    require: true,
  },
  categoryId: Number,
  screenShots: [String],
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
