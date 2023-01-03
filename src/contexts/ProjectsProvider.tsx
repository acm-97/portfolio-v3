import { createContext, ReactNode, useState, useContext, useEffect, useMemo } from 'react';

import { gitProjects } from '@/services';

export type ProjectsProps = {
  id: string;
  name: string;
  fullName: string;
  github: string;
  description: string;
  website: string;
  topics?: string[] | [];
  createdAt: Date;
  madeAt: string;
};

interface ProjectsContextProps {
  projects: ProjectsProps[];
  isLoading: boolean;
  omitedProjects: string[];
}

export const ProjectsContext = createContext<ProjectsContextProps>({
  projects: [],
  isLoading: false,
  omitedProjects: [],
});

type ProjectsProviderProps = {
  children: ReactNode;
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer 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',
};

const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchProjects = () => {
      fetch('https://api.github.com/users/acm-97/repos', { signal })
        .then((res) => res.json())
        .then(async (repos) => {
          setProjects(await gitProjects(repos));
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            setLoading(false);
          } else throw new Error(err);
        });
    };
    fetchProjects();

    return () => {
      controller.abort();
    };
  }, []);

  const providerValue = useMemo(
    () => ({
      projects,
      isLoading: loading,
      omitedProjects: ['AcmFolio', 'eslint-prettier-config', `react-snake-game`, 'portfolio-v3'],
    }),
    [loading, projects],
  );

  return <ProjectsContext.Provider value={providerValue}>{children}</ProjectsContext.Provider>;
};
export const useGithubProjects = () => useContext(ProjectsContext);

export default ProjectsProvider;
