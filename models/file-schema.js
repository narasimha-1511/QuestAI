const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const File = mongoose.model("File", fileSchema);

module.exports = File;
