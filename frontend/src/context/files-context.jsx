import React, { createContext, useState, useContext, useEffect , useCallback } from 'react';
import { apiInstance } from '../utils/api-instance';
import { useProjectsContext } from './projects-context';

const FilesContext = createContext({});

export function FilesProvider({ children }) {
    const { decreaseEpisodeCount } = useProjectsContext();
  const [files, setFiles] = useState([]);
  const [projectId, setProjectId] = useState(sessionStorage.getItem("projectId") || null);
  const [projectName, setProjectName] = useState(sessionStorage.getItem("projectName") || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("projectId", projectId)
    if (projectId) {
        sessionStorage.setItem("projectId", projectId);
        sessionStorage.setItem("projectName", projectName);
        console.log("projectId i started fetching files", projectId)
      getFiles(projectId);
    }
  },[projectId]);
  

  const fetchFiles =  () => (projectId , projectName) => {
    console.log("projectId i am inside fetchFiles", projectId)
    setProjectId(projectId);
    setProjectName(projectName);
    sessionStorage.setItem("projectId", projectId);
    sessionStorage.setItem("projectName", projectName);
    getFiles(projectId);
    console.log(projectId, projectName, "projectId and projectName")
  };

  const getFiles = (projectId) => {
    if (projectId) {
      setLoading(true);
      apiInstance.get(`/api/file/${projectId}`).then((response) => {
        if (response.data?.data) {
          setFiles(response.data.data);
        }
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.error(error);
      });
    }
  };

  const removeFile = (fileId) => {
    apiInstance.delete(`/api/file/${fileId}` , {
        projectId:projectId
    }).then((response) => {
        console.log(projectId, "projectId i am inside removeFile")
        decreaseEpisodeCount(projectId);
        setFiles((prevFiles) => prevFiles.filter(file => file._id !== fileId));
    }).catch((error) => {
        console.error(error);
    });
  };

  const updateFile = (fileId, updatedData) => {
    apiInstance.put(`/api/file/${fileId}`, { fileDescription: updatedData }).then((response) => {
        if(response.data.doc){  
            setFiles((prevFiles) => prevFiles.map(file => 
                file._id === fileId ? { ...file, fileDescription: updatedData } : file
            ));
        }
    }).catch((error) => {
        console.error(error);
    });
  };

  const createFile = async (name , transcript) => {
    setLoading(true);
    try{
        const response = await apiInstance.post(`/api/file/${projectId}`, {
            fileName:name,
            fileDescription:transcript 
        })
        if(response.data.doc){
            if(files.length === 0){
                setFiles([response.data.doc]);
            }else{
                setFiles((prevFiles) => [...prevFiles, response.data.doc]);
            }
        }
    }catch(error){
        setLoading(false);
        console.error(error);
    }finally{
        setLoading(false);
    }
  };

  return (
    <FilesContext.Provider value={{ files, setFiles ,  createFile ,removeFile, updateFile , loading , setProjectId , projectId, projectName , fetchFiles , setProjectId}}>
      {children}
    </FilesContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error('useFiles must be used within a FilesProvider');
  }
  return context;
}