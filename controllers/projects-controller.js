const { Project } = require("../models/project-schema.js");

const createProject = async (req, res) => {
  try {
    const userId = req.user._id;

    const { projectName } = req.body;

    const doc = await Project.create({
      userId: userId,
      projectName: projectName,
    });

    res
      .status(200)
      .json({
        success: true,
        message: "project created",
        id: doc._id,
        title: doc.projectName,
        episodes: 0,
        latest_edited: doc.updatedAt,
      });
  } catch (error) {
    console.error(`Error in project controller:`, error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create project",
        error: error.message,
      });
  }
};

// fetching projects
const fetchProjects = async (req, res) => {
  try {
    const userId = req.user._id;

    console.log(userId, "this is the user id");

    const projectData = await Project.find({
      userId: userId,
    });

    console.log(projectData, "this is the project data");

    if (projectData.length === 0) {
      console.log("no projects found");
      return res.status(200).json({ success: true, data: null });
    }

    res
      .status(200)
      .json({ success: true, message: "project fetched", data: projectData });
  } catch (error) {
    console.error(`Error in project controlller :`, error);
    throw new Error(`Failed in project Controller: ${error.message}`);
  }
};

module.exports = { createProject, fetchProjects };
