'use client'
import {memo, useMemo} from 'react'
import {useGithubProjects} from '@/app/contexts'
import {privateProjects} from '@/app/constants'
import {RevealList, Icon, Button} from '@/app/components'
import Link from 'next/link'

type NoteworthyProjectsProps = {t: any; lng: string}

const NoteworthyProjects = ({t, lng}: NoteworthyProjectsProps) => {
  const {projects: githubProjects, isLoading} = useGithubProjects()

  const projects = useMemo(
    () =>
      privateProjects
        .concat(
          githubProjects.filter(
            project =>
              project?.topics?.length &&
              project?.topics?.length > 0 &&
              project?.topics?.some(val => val === 'react' || val === 'next'),
          ),
        )
        .slice(0, 6),

    [githubProjects],
  )

  return (
    <>
      <RevealList delay={500} interval={200} className="text-center">
        <h3 className="mb-4">{t('work:otherProjects.title')}</h3>
        <div>
          <Button href="/archive" className="text-sm">
            {t('work:otherProjects.archive')}
          </Button>
        </div>
      </RevealList>

      {!isLoading && (
        <div className="w-full">
          {/* projects-grid */}
          <RevealList
            component="ul"
            className="relative mt-4 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-0"
            delay={500}
            interval={200}
            origin="left"
          >
            {projects.map((project, i) => (
              <li key={i}>
                {/* project-inner */}
                <div className="relative top-0 flex h-full flex-col items-start justify-between overflow-auto rounded-[10px] bg-primary-dark px-7 py-8 shadow-[#0000001a_0px_1px_3px_0px,#0000000f_0px_1px_2px_0px] transition-[all_0.25s_cubic-bezier(0.645,0.045,0.355,1)] hover:top-[-8px]">
                  <header>
                    <div className="flex w-full items-center justify-between ">
                      <Icon name="Folder" className="!h-14 w-[3.1rem] pl-0 text-secondary-main" />
                      <div className="z-10  flex items-center">
                        {project.github && (
                          <Icon
                            name="GitHub"
                            className="h-[2.45rem]"
                            linkProps={{href: project.github}}
                          />
                        )}
                        {project.website && (
                          <Icon
                            name="External"
                            className="h-[2.45rem]"
                            linkProps={{href: project.website}}
                          />
                        )}
                      </div>
                    </div>
                    {/* project-title */}
                    <Link
                      className="text-secondary-main before:absolute before:left-0 before:top-0 before:z-0 before:block before:h-full before:w-full before:content-[''] hover:text-secondary-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github || project.website}
                    >
                      <h4 className="mb-3">{project.name}</h4>
                    </Link>
                    <div className="text-primary-dark">
                      {project.description ?? t(`work:otherProjects.${project.name}.description`)}
                    </div>
                  </header>
                  <footer className="w-full">
                    <ul className="mt-3 flex grow list-none flex-wrap p-0 font-mono text-xs text-primary-dark">
                      {project.topics?.map(topic => (
                        <li
                          className="not-last-child::mr-2 mt-2 rounded-lg bg-primary-main px-2 py-1"
                          key={crypto.randomUUID()}
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </li>
            ))}
          </RevealList>
        </div>
      )}
    </>
  )
}

export default memo(NoteworthyProjects)
