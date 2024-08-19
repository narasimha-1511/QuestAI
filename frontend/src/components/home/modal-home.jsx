import React, { useState } from 'react';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import Spinner from '../shared/Spinner';
import { useProjectsContext } from '../../context/projects-context';

const ModalHome = ({isModalOpen, setIsModalOpen}) => {
    const { createNewProject } = useProjectsContext();
    const [projectName, setProjectName] = useState('');
    const [projectModelError, setProjectModelError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateProject = async () => {
        setIsLoading(true);
        if (projectName.trim() === '') {
            setProjectModelError('Project Name Cannot be empty');
            setIsLoading(false);
            return;
        }
        setProjectModelError('');
        await createNewProject(projectName);
        setIsLoading(false);
        setIsModalOpen(false);
    }

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create a New Project">
            <label htmlFor="project-name" className='text-gray-400'>Project Name:</label>
            <input 
                type="text" 
                id="project-name" 
                className='w-full p-2 border-2 border-gray-300 rounded-md'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            {projectModelError && <p className='text-red-500'>{projectModelError}</p>}
            <div className='flex justify-end'>
                <Button className='text-white bg-black hover:bg-black/80 flex items-center' onClick={handleCreateProject}>
                    {isLoading ? <Spinner className='w-4 h-4 mr-2'/> : 'Create'}
                </Button>
            </div>
        </Modal>   
    )
}

export default ModalHome