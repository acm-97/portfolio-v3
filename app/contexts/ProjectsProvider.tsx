'use client'
import {createContext, type ReactNode, useState, useContext, useEffect, useMemo} from 'react'
import {gitProjects} from '@/app/services'
import {GIT_TOKEN} from '@/app/constants'

export type ProjectsProps = {
  id: string
  name: string
  fullName: string
  github: string
  description?: string
  website: string
  topics?: string[] | []
  createdAt: Date
  madeAt: string
}

interface ProjectsContextProps {
  projects: ProjectsProps[]
  isLoading: boolean
  omitedProjects: string[]
}

export const ProjectsContext = createContext<ProjectsContextProps>({
  projects: [],
  isLoading: false,
  omitedProjects: [],
})

type ProjectsProviderProps = {
  children: ReactNode
}

const ProjectsProvider = ({children}: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<ProjectsProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const headers = useMemo<HeadersInit | undefined>(
    () => ({
      'Content-Type': 'application/json',
      Authorization: GIT_TOKEN!,
    }),
    [],
  )

  useEffect(() => {
    const controller = new AbortController()
    const {signal} = controller
    const fetchProjects = () => {
      fetch('https://api.github.com/users/acm-97/repos', {headers, signal})
        .then(async res => await res.json())
        .then(async repos => {
          setProjects(await gitProjects(repos, headers))
          setLoading(false)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            setLoading(false)
          } else throw new Error(err)
        })
    }
    fetchProjects()

    return () => {
      controller.abort()
    }
  }, [headers])

  const providerValue = useMemo(
    () => ({
      projects,
      isLoading: loading,
      omitedProjects: ['AcmFolio', 'eslint-prettier-config', `react-snake-game`, 'portfolio-v3'],
    }),
    [loading, projects],
  )

  return <ProjectsContext.Provider value={providerValue}>{children}</ProjectsContext.Provider>
}
export const useGithubProjects = () => useContext(ProjectsContext)

export default ProjectsProvider
