import { memo } from 'react';

import { useProjects } from '@/hooks';
import { SectionHeader as Header, Icon, Link, ScrollReveal } from '@/components';
import '@/styles/work.css';

// type WorkProps = {};

const Work = () => {
  const { personalProjects } = useProjects();
  return (
    <>
      <div className="flex w-full flex-col justify-start">
        <Header scrollReveal num={2} text="Some Things I’ve Built" />
        <ScrollReveal component="ul" className="w-full">
          {personalProjects.map((project) => (
            <li key={project.name} className="grid-wo">
              <div className="project-content w-full">
                <div className="project-header">
                  <p className="sec-color font--mono mb-1 text-sm">Featured Project</p>
                  <p className="text-2xl">{project.name}</p>
                </div>
                <div className="project-description">{project.description}</div>
                <div className="project-keywords mb-3 text-sm">
                  {project.keyWords.map((keyWord) => (
                    <span className="mx-2" key={`${project.name}-${keyWord}`}>
                      {keyWord}
                    </span>
                  ))}
                </div>
                <div>
                  <Icon name="GitHub" linkProps={{ external: true, href: project.github }} />
                  {project.website && <Icon linkProps={{ external: true, href: project.website }} />}
                </div>
              </div>
              <div className="project-image-wrapper hover:z-10">
                <figure className="project-image relative h-full grayscale filter transition-all duration-300 hover:blur-none hover:grayscale-0 max-md:blur-sm">
                  {project.website ? (
                    <Link href={project.website} external>
                      <img className="rounded-lg" src={project.image} alt={project.name} />
                    </Link>
                  ) : (
                    <img className="rounded-lg" src={project.image} alt={project.name} />
                  )}
                </figure>
              </div>
            </li>
          ))}
        </ScrollReveal>
      </div>
    </>
  );
};

export default memo(Work);
