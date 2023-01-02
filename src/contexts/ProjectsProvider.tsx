import { createContext, ReactNode, useState, useContext, useEffect, useMemo } from 'react';

export type ProjectsProps = {
  id: string;
  name: string;
  fullName: string;
  github: string;
  description: string;
  website: string;
  topics?: string[];
  owner: {
    userName: string;
    id?: string;
    avatar_url?: string;
  };
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

const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * * maping th repos array and adding topics for each project
   */
  const gitProjects = async (repos: any) => {
    const controller = new AbortController();
    const { signal } = controller;
    return await Promise.all(
      repos.map(async (item: any) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const topics = await fetch(`https://api.github.com/repos/acm-97/${item.name}/topics`, { signal })
          .then((res) => res.json())
          .then((_topics) => _topics.names);

        return {
          id: item.id,
          name: item.name,
          fullName: item.full_name,
          github: item.html_url,
          website: item.homepage,
          description: item.description,
          topics,
          owner: {
            id: item.owner.id,
            userName: item.owner.userName,
            avatar_url: item.owner.avatar_url,
          },
        };
      }),
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchProjects = () => {
      setLoading(true);
      fetch('https://api.github.com/users/acm-97/repos', { signal })
        .then((res) => res.json())
        .then(async (repos) => {
          setProjects(await gitProjects(repos));
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            setLoading(true);
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
