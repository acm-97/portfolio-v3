import {memo} from 'react'

import {useProjects} from '@/app/hooks'
import {SectionHeader as Header, Icon, RevealWrapper, RevealList} from '@/app/components'
import Link from 'next/link'

type WorkProps = {t: any}

const Work = ({t}: WorkProps) => {
  const {personalProjects} = useProjects()
  return (
    <>
      <RevealWrapper origin="left">
        <Header num={3} text={t('work:myBuilds.title')} />
      </RevealWrapper>
      <RevealList component="ul" className="w-full">
        {personalProjects.map(project => (
          // grid-wo
          <li
            key={project.name}
            className="group relative grid w-full grid-cols-[repeat(12,1fr)] items-center gap-2.5  not-last-of-type:mb-24 max-md:not-last-of-type:mb-[70px]"
          >
            {/* project-content */}
            <div className="relative z-[5] w-full [grid-area:1_/_1_/_-1_/_7] group-[:nth-of-type(2n_+_1)]:text-right group-[:nth-of-type(2n_+_1)]:[grid-column:7_/_-1] max-lg:[grid-column:1_/_9] max-lg:group-[:nth-of-type(2n_+_1)]:[grid-column:5_/_-1] max-md:flex max-md:h-full max-md:flex-col max-md:justify-center max-md:p-[2.5rem_2.5rem_1.875rem] max-md:[grid-column:1_/_-1] max-md:group-[:nth-of-type(2n_+_1)]:text-left max-sm:p-[1.875rem_1.5625rem_1.25rem]  ">
              {/* project-header */}
              <div className="ml-2 group-[:nth-of-type(2n_+_1)]:mr-2">
                <p className="mb-1 font-mono text-sm text-secondary-main">
                  {t('work:myBuilds.featured')}
                </p>
                <p className="text-2xl">{project.name}</p>
              </div>
              {/* project-description */}
              <div className="relative z-[2] mb-6 mt-5 rounded-[0.625rem] border border-solid border-transparent bg-primary-dark p-6 shadow-[#0000001a_0px_1px_3px_0px,_#0000000f_0px_1px_2px_0px] max-md:!bg-transparent max-md:p-[1.25rem_0_0_8px] max-md:shadow-none">
                {project.description}
              </div>
              {/* project-keywords */}
              <div className="mb-3 flex flex-wrap justify-start text-sm text-primary-dark group-[:nth-of-type(2n_+_1)]:justify-end max-md:!justify-start">
                {project.keyWords.map(keyWord => (
                  <span className="mx-2" key={`${project.name}-${keyWord}`}>
                    {keyWord}
                  </span>
                ))}
              </div>
              <div>
                <Icon name="GitHub" linkProps={{href: project.github}} />
                {project.website && <Icon linkProps={{href: project.website}} />}
              </div>
            </div>
            {/* project-image-wrapper */}
            <div className="relative z-[1] transition-[all_0.25s_cubic-bezier(0.645,0.045,0.355,1)] [grid-area:1_/_6_/_-1_/_-1] hover:z-10 group-[:nth-of-type(2n_+_1)]:[grid-column:1_/_8] max-md:h-full max-md:opacity-25 max-md:[grid-column:1_/_-1]">
              <figure className="relative h-full grayscale transition-all duration-300 hover:blur-none hover:grayscale-0 max-md:blur-sm  ">
                {project.website ? (
                  <Link href={project.website} target="_blanc" rel="noopener norefer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="rounded-lg  max-md:h-full max-md:w-full"
                      src={project.image}
                      alt={project.name}
                    />
                  </Link>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="rounded-lg  max-md:h-full max-md:w-full"
                    src={project.image}
                    alt={project.name}
                  />
                )}
              </figure>
            </div>
          </li>
        ))}
      </RevealList>
    </>
  )
}

export default memo(Work)
