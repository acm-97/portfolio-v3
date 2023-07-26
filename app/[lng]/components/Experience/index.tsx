'use client'
import {memo, useState} from 'react'
import cls from 'classnames'
import ExperienceInfo from './ExperienceInfo'
import {CRAI, DOFLEINI} from '@/app/constants'
import {SectionHeader as Header, RevealList, RevealWrapper} from '@/app/components'

type ExperienceProps = {t: any}

const jobs = ['CRAI', 'Dofleini']

const Experience = ({t}: ExperienceProps) => {
  const [activeTab, setActiveTab] = useState(jobs[0])

  return (
    <div className=" w-full max-w-2xl">
      <RevealWrapper origin="left">
        <Header num={2} text={t('experience:title')} />
      </RevealWrapper>
      <RevealList
        delay={300}
        interval={200}
        className="grid min-h-[18.75rem] grid-cols-[0.8fr_3fr] max-sm:block"
      >
        <div className="tabs flex-col max-sm:mb-10 max-sm:!flex-row max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:text-center">
          {jobs.map(item => (
            <button
              key={item}
              type="button"
              className={cls(
                'tab !text-primary-dark w-full !text-left !border-l-[0.2rem] !border-solid !border-gray-dark !justify-start !font-mono !p-[0_1.25rem] !h-10 !overflow-hidden hover:!text-secondary-main hover:!bg-primary-dark max-sm:!border-l-0 max-sm:!border-b-[0.2rem] max-sm:min-w-[100px] max-sm:!p-[0_0.85rem] max-sm:!justify-center',
                item === activeTab &&
                  '!border-l-[0.2rem] !border-solid !border-teal-main !text-secondary-main max-sm:!border-l-0 max-sm:!border-b-[0.2rem]',
              )}
              onClick={() => setActiveTab(item)}
            >
              <span>{item}</span>
            </button>
          ))}
          {jobs.map(item => (
            <button
              key={item}
              type="button"
              className={cls(
                'tab !text-primary-dark w-full !text-left !border-l-[0.2rem] !border-solid !border-gray-dark !justify-start !font-mono !p-[0_1.25rem] !h-10 !overflow-hidden hover:!text-secondary-main hover:!bg-primary-dark max-sm:!border-l-0 max-sm:!border-b-[0.2rem] max-sm:min-w-[100px] max-sm:!p-[0_0.85rem] max-sm:!justify-center',
                item === activeTab &&
                  '!border-l-[0.2rem] !border-solid !border-teal-main !text-secondary-main max-sm:!border-l-0 max-sm:!border-b-[0.2rem]',
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
            projectLink={DOFLEINI}
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
      </RevealList>
    </div>
  )
}

export default memo(Experience)
