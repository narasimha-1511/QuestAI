import React from 'react'
import { AuthProvider } from './auth-context';
import { ProjectsProvider } from './projects-context';
import { FilesProvider } from './files-context';

const ContextsProvider = ({ children}) => {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <FilesProvider>
          {children}
        </FilesProvider>
      </ProjectsProvider>
    </AuthProvider>
  )
}

export default ContextsProvider;