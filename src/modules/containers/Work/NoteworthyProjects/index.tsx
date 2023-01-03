import { v4 as uuidv4 } from 'uuid';
import { Link as LinkRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';

import { useGithubProjects } from '@/contexts';
import { ScrollReveal, Icon, Link } from '@/components';

// type NoteworthyProjectsProps = {};

const NoteworthyProjects = () => {
  const { projects: githubProjects, isLoading, omitedProjects } = useGithubProjects();
  const { t, i18n } = useTranslation('work');

  const projects = useMemo(
    () =>
      githubProjects
        .filter(
          (project) => project?.topics?.length && project?.topics?.length > 0 && !omitedProjects.includes(project.name),
        )
        .slice(0, 6),

    [githubProjects, omitedProjects],
  );

  return (
    <>
      <ScrollReveal className="text-center">
        <h3 className="mb-4">{t('otherProjects.title')}</h3>
        <div>
          <LinkRouter reloadDocument to="/archive" className="font--mono text-sm underline">
            {t('otherProjects.archive')}
          </LinkRouter>
        </div>
      </ScrollReveal>

      {!isLoading && (
        <div className="w-full">
          <ScrollReveal component="ul" className="projects-grid mt-4 " origin="left" interval={100}>
            {projects.map((project, i) => (
              <li key={i}>
                <div className="project-inner">
                  <header>
                    <div className="flex w-full items-center justify-between ">
                      <Icon name="Folder" className="sec-color h-14 w-[3.1rem] pl-0" />
                      <div className="z-10  flex items-center">
                        <Icon
                          name="GitHub"
                          className="h-[2.45rem]"
                          linkProps={{ external: true, href: project.github }}
                        />
                        {project.website && (
                          <Icon
                            name="External"
                            className="h-[2.45rem]"
                            linkProps={{ external: true, href: project.website }}
                          />
                        )}
                      </div>
                    </div>
                    <h4 className="project-title mb-3 ">
                      <Link external href={project.website || project.github}>
                        {project.name}
                      </Link>
                    </h4>
                    <div className="primary-color-dark">
                      {i18n.language === 'en' ? project.description : t(`otherProjects.${project.name}.description`)}
                    </div>
                  </header>
                  <footer className="w-full">
                    <ul className="font--mono primary-color-dark mt-3 flex flex-grow list-none flex-wrap p-0 text-xs">
                      {project.topics &&
                        project.topics.map((topic) => (
                          <li className="primary-bg mt-2 rounded-lg px-2 py-1 not-last:mr-2" key={uuidv4()}>
                            {topic}
                          </li>
                        ))}
                    </ul>
                  </footer>
                </div>
              </li>
            ))}
          </ScrollReveal>
        </div>
      )}
    </>
  );
};

export default memo(NoteworthyProjects);
