import React  from 'react'
import { formatTimeAgo } from '../../utils/const-functions'
import { useNavigate } from 'react-router-dom';
import { useFiles } from '../../context/files-context';

const ProjectCard = ({title, episodes, lastedited , id}) => {
        const navigate = useNavigate();
        const { fetchFiles , setProjectId  } = useFiles();
    return (
        <div className="w-[270px] flex items-center bg-white border border-gray-400 rounded-2xl p-4 cursor-pointer" onClick={() =>{ navigate(`/project/${title}/add-podcast`); fetchFiles(id , title); setProjectId(id); console.log(id , "this is the project id i had set to it")}}>
            <div className="w-16 h-16 flex items-center justify-center bg-[#f7a01d] rounded-lg text-white font-bold text-2xl">
            SP
            </div>
            <div className="ml-4 text-left flex flex-col">
                <h3 className="text-xl font-semibold text-purple-700">
                {title}
                </h3>
                <p className="text-gray-600 text-xs">{episodes} Episodes</p>
                <p className="text-gray-400 text-sm mt-2">Last edited {formatTimeAgo(lastedited)}</p>
            </div>
        </div>
    );
}
  
export default ProjectCard