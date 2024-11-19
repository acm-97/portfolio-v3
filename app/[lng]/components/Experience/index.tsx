'use client'
import {memo, useState} from 'react'
import cls from 'classnames'
import ExperienceInfo from './ExperienceInfo'
import {CRAI, DOFLEINI, DOUBLE2} from '@/app/constants'
import {SectionHeader as Header, RevealList, RevealWrapper} from '@/app/components'

type ExperienceProps = {t: any}

const jobs = ['CRAI', 'Dofleini', 'MITI MITI ESTUDIO', 'INITIUM USA CORP', 'Double2']

const Experience = ({t}: ExperienceProps) => {
  const [activeTab, setActiveTab] = useState(jobs[0])

  return (
    <div className=" w-full max-w-2xl">
      <RevealWrapper origin="left">
        <Header num={2} text={t('experience:title')} />
      </RevealWrapper>
      <RevealWrapper
        delay={300}
        className="grid min-h-[18.75rem] grid-cols-[0.8fr_2fr] max-md:block"
      >
        <div className="tabs flex-col max-md:mb-10 max-md:!flex-row max-md:flex-nowrap max-md:overflow-x-auto max-md:text-center">
          {jobs.map(item => (
            <button
              key={item}
              type="button"
              className={cls(
                'tab !text-primary-dark w-full !text-left !border-l-[0.2rem] !border-solid !border-gray-dark !justify-start !font-mono !p-[0_1.25rem] !h-10 !overflow-hidden hover:!text-secondary-main hover:!bg-primary-dark max-md:!border-l-0 max-md:!border-b-[0.2rem] max-md:min-w-fit max-md:!p-[0_0.85rem] max-md:!justify-center',
                item === activeTab &&
                  '!border-l-[0.2rem] !border-solid !border-teal-main !text-secondary-main max-md:!border-l-0 max-md:!border-b-[0.2rem]',
              )}
              onClick={() => setActiveTab(item)}
            >
              <span>{item}</span>
            </button>
          ))}
        </div>

        <div
          id={jobs[0]}
          className={cls(
            activeTab === jobs[0] ? 'block' : 'hidden',
            'tab-content animate-fade-in animation-delay-[0.1s] flex flex-col px-5 py-1',
          )}
        >
          <ExperienceInfo
            position={t('experience:crai.position')}
            project="CRAI"
            projectLink={CRAI}
            dateRange={t('experience:crai.dateRange')}
          >
            <>{t('experience:crai.description.1')}</>
            <>{t('experience:crai.description.2')}</>
            <>{t('experience:crai.description.3')}</>
            <>{t('experience:crai.description.4')}</>
          </ExperienceInfo>
        </div>
        <div
          id={jobs[1]}
          className={cls(
            activeTab === jobs[1] ? 'block' : 'hidden',
            'tab-content animate-fade-in animation-delay-[0.1s] flex flex-col px-5 py-1',
          )}
        >
          <ExperienceInfo
            position={t('experience:dofleini.position')}
            project="Dofleini"
            projectLink="https://dofleini.com/"
            dateRange={t('experience:dofleini.dateRange')}
          >
            <>
              <>{t('experience:dofleini.description.1')}</>
            </>
            <>
              <>{t('experience:dofleini.description.2')}</>
            </>
            <>
              <>{t('experience:dofleini.description.3')}</>
            </>
          </ExperienceInfo>
        </div>
        <div
          id={jobs[2]}
          className={cls(
            activeTab === jobs[2] ? 'block' : 'hidden',
            'tab-content animate-fade-in animation-delay-[0.1s] flex flex-col px-5 py-1',
          )}
        >
          <ExperienceInfo
            position={t('experience:mitmiti.position')}
            project="MITI MITI ESTUDIO"
            projectLink="https://mitimitiestudio.com/"
            dateRange={t('experience:mitmiti.dateRange')}
          >
            <>
              <>{t('experience:mitmiti.description.1')}</>
            </>
            <>
              <>{t('experience:mitmiti.description.2')}</>
            </>
            <>
              <>{t('experience:mitmiti.description.3')}</>
            </>
          </ExperienceInfo>
        </div>
        <div
          id={jobs[3]}
          className={cls(
            activeTab === jobs[3] ? 'block' : 'hidden',
            'tab-content animate-fade-in animation-delay-[0.1s] flex flex-col px-5 py-1',
          )}
        >
          <ExperienceInfo
            position={t('experience:initium.position')}
            project="INITIUM USA CORP"
            projectLink="https://www.initiumusacorp.com/"
            dateRange={t('experience:initium.dateRange')}
          >
            <>
              <>{t('experience:initium.description.1')}</>
            </>
            <>
              <>{t('experience:initium.description.2')}</>
            </>
            <>
              <>{t('experience:initium.description.3')}</>
            </>
          </ExperienceInfo>
        </div>
        <div
          id={jobs[4]}
          className={cls(
            activeTab === jobs[4] ? 'block' : 'hidden',
            'tab-content animate-fade-in animation-delay-[0.1s] flex flex-col px-5 py-1',
          )}
        >
          <ExperienceInfo
            position={t('experience:double2.position')}
            project="Double2"
            projectLink="https://double2.us/"
            dateRange={t('experience:double2.dateRange')}
          >
            <>
              <>{t('experience:double2.description.1')}</>
            </>
            <>
              <>{t('experience:double2.description.2')}</>
            </>
            <>
              <>{t('experience:double2.description.3')}</>
            </>
          </ExperienceInfo>
        </div>
      </RevealWrapper>
    </div>
  )
}

export default memo(Experience)
