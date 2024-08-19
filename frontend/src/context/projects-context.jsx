import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { apiInstance } from "../utils/api-instance";
import { useAuth } from "./auth-context";

const ProjectsContext = createContext({});

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedIn } = useAuth();

  useEffect(() => {
    console.log(projects, "changes in projects");
  }, [projects]);

  useEffect(() => {
    if (loggedIn) {
      fetchProjects();
    }
  }, [loggedIn]);

  const fetchProjects = useCallback(() => {
    setIsLoading(true);
    apiInstance
      .get("/api/project")
      .then((response) => {
        if (response.data.data !== null) {
          setProjects(Array.from(response.data.data));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      });
  }, []);

  const createNewProject = useCallback(async (projectName) => {
    setIsLoading(true);
    try {
      const response = await apiInstance.post("/api/project/create", {
        projectName,
      });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      if (projects == null) {
        setProjects([
          {
            id: response.data.id,
            projectName: response.data.title,
            updatedAt: response.data.lastest_edited,
            episodeCount: response.data.episodes,
          },
        ]);
      } else {
        setProjects((prevProjects) => [
          ...prevProjects,
          {
            id: response.data.id,
            projectName: response.data.title,
            updatedAt: response.data.lastest_edited,
            episodeCount: response.data.episodes,
          },
        ]);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const increaseEpisodeCount = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id == projectId
          ? { ...project, episodeCount: project.episodeCount + 1 }
          : project,
      ),
    );
  };

  const decreaseEpisodeCount = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id == projectId
          ? { ...project, episodeCount: project.episodeCount - 1 }
          : project,
      ),
    );
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        isLoading,
        createNewProject,
        fetchProjects,
        increaseEpisodeCount,
        decreaseEpisodeCount,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
