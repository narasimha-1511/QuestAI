import React from 'react'
import ProjectCard from './project-card'
import { useEffect } from 'react'


const Projects = ({ projects }) => {
  useEffect(() => {
    console.log("Projects: just updated", projects);
  }, [projects]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 sm:px-6 md:px-8'>
    {projects.map((project) => (
        <ProjectCard key={project._id} id={(project._id) ? project._id : project.id} title={project.projectName} episodes={project.episodeCount} lastedited={project.updatedAt} />
    ))}
</div>
  )
}

export default Projects