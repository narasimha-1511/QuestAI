import React, { useState , useEffect} from 'react'
import Header from '../components/home/home-header'
import Button from '../components/shared/Button'
import Add from '../assets/icons/add.svg'
import ModalHome from '../components/home/modal-home'
import NoProjects from '../components/home/no-projects'
import Projects from '../components/home/projects'
import Spinner from '../components/shared/Spinner'
import { useProjectsContext } from '../context/projects-context';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { projects , isLoading } = useProjectsContext();

  return (
    <div className='flex flex-col h-screen w-screen'>
        <Header />
        { isLoading ? (
            <div className='flex justify-center items-center h-screen w-full'>
                <Spinner />
            </div>
        ) : projects.length == 0 ? (
            <NoProjects>
               <Button className='text-white bg-black hover:bg-black/80 flex items-center' onClick={() => setIsModalOpen(true)}>
                <img src={Add} alt='Add' className='w-5 h-5 mr-2' />
                    Create a New Project
            </Button>
            </NoProjects>
            ) : (
                <div className='h-screen px-[6rem] mt-8'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex justify-between items-center gap-4 w-full'>
                        <h1 className='text-3xl font-bold text-purple-600'>Projects</h1>
                        <Button className='text-white bg-black hover:bg-black/80 flex items-center' onClick={() => setIsModalOpen(true)}>
                                <img src={Add} alt='Add' className='w-5 h-5 mr-2' />
                                Create a New Project
                        </Button>
                    </div>
                    <Projects projects={projects}/>
                </div>
            </div>
            )
        }
       
        <ModalHome isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}


export default HomePage