const File = require("../models/file-schema.js");
const { Project } = require("../models/project-schema.js");
//create file
const createFile = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { fileName, fileDescription } = req.body;

    console.log(projectId , "this is the project id");
    console.log(fileName , "this is the file name");
    console.log(fileDescription , "this is the file description");

    const doc = await File.create({
      projectId: projectId,
      fileName,
      fileDescription,
    });

    const project = await Project.findByIdAndUpdate(
      projectId,
      { $inc: { episodeCount: 1 } },
      { new: true }
    );
    
    if (!project) {
      throw new Error('Project not found');
    }

    res.status(200).json({ success: true, message: "file created", doc });
  } catch (error) {
    console.error(`Error in file controller:`, error);
    res.status(500).json({ success: false, message: `Failed in file controller: ${error.message}` });
  }
};


  // fetching files
 const fetchFiles = async (req, res) => {
    try {
      const { projectId } = req.params;
  
      const FileData = await File.find({
        projectId: projectId,
      });
  
      res
        .status(200)
        .json({ success: true, message: "files fetched", data: FileData });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };

  //edit file
 const editFile = async (req, res) => {
    try {
      const { fileId } = req.params;
      const { fileDescription } = req.body;
  
      const doc = await File.updateOne(
        {
          _id: fileId
        },
        {
          $set: {
            fileDescription,
          },
        }
      );
  
      res.status(200).json({ success: true, message: "file updated", doc });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  //delete file
 const deleteFile = async (req, res) => {
    try {
      const { fileId } = req.params;
      const { projectId } = req.body;
  
      const deletedFile = await File.findOneAndDelete({
        _id: fileId,
      });
  
      if (!deletedFile) {
        return res.status(404).json({ success: false, message: "File not found" });
      }
  
       await Project.findByIdAndUpdate(
        projectId,
        { $inc: { episodeCount: -1 } },
        { new: true }
      );
  
      res.status(200).json({ success: true, message: "file deleted", doc: deletedFile });
    } catch (error) {
      console.error(`Error in file controller:`, error);
      res.status(500).json({ success: false, message: `Failed in file controller: ${error.message}` });
    }
  };

module.exports = { createFile  , fetchFiles , editFile , deleteFile };