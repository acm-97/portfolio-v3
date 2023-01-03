import { ProjectsProps } from '@/contexts';

/**
 * * maping th repos array and adding topics for each project
 */
export async function gitProjects(repos: ProjectsProps[]) {
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
}

export async function fetchProjects(): Promise<void | { projects: ProjectsProps[]; controller: AbortController }> {
  const controller = new AbortController();
  const { signal } = controller;
  // setLoading(true);
  return await fetch('https://api.github.com/users/acm-97/repos', { signal })
    .then((res) => res.json())
    .then(async (repos) =>
      // setProjects(await gitProjects(repos));
      // setLoading(false);
      ({
        projects: await gitProjects(repos),
        controller,
      }),
    )
    .catch((err) => {
      if (err.name === 'AbortError') {
        // setLoading(true);
      } else throw new Error(err);
    });
}
