'use client'
import {memo, useEffect, useMemo, useRef} from 'react'
import classNames from 'classnames'

import {HandleNavBar, scrollToHashSection} from '@/app/utils'
import {Home, About, Experience, MyBuilds, NoteworthyProjects, Contact} from './components'
import {Head} from '@/app/components'
import {useTranslation} from '../i18n/client'

type HomeProps = {params: {lng: string}}

const HomePage = ({params: {lng}}: HomeProps) => {
  const {t} = useTranslation(lng, ['common', 'home', 'about', 'experience', 'work'])

  const sectionAbout = useRef<HTMLDivElement>(null)
  const sectionExperience = useRef<HTMLDivElement>(null)
  const sectionMyBuilds = useRef<HTMLDivElement>(null)
  const sectionContact = useRef<HTMLDivElement>(null)

  const sections = useMemo(
    () => [
      {key: 'home', component: <Home t={t} />, ref: null},
      {key: 'about', component: <About t={t} lng={lng} />, ref: sectionAbout},
      {key: 'experience', component: <Experience t={t} />, ref: sectionExperience},
      {key: 'work', component: <MyBuilds t={t} />, ref: sectionMyBuilds},
      {key: 'noteworthyProjects', component: <NoteworthyProjects t={t} lng={lng} />, ref: null},
      {key: 'contact', component: <Contact t={t} />, ref: sectionContact},
    ],
    [t, lng],
  )

  useEffect(() => {
    HandleNavBar()
  })

  useEffect(() => {
    scrollToHashSection(sectionAbout, sectionExperience, sectionMyBuilds, sectionContact)
  }, [sectionAbout, sectionExperience, sectionMyBuilds, sectionContact])

  return (
    <>
      <Head lng={lng} title="home" />
      <main className="min-h-screen w-full p-[0_9.6875rem] max-lg:p-[0_6rem] max-md:p-[0_3.125rem] max-[480px]:p-[0_1.5625rem]">
        {sections.map(({key, component, ref}, i) => (
          <section
            key={`${key}-section`}
            id={key}
            ref={ref}
            className={classNames(
              i === 0 ? 'min-h-screen' : 'min-h-[60vh]',
              'my-0 mx-auto max-w-[62.5rem] py-[100px] px-0 flex w-full flex-col items-center justify-center max-md:p-[5rem_0] max-md:p-[480]:p-[60px_0]',
            )}
          >
            {component}
          </section>
        ))}
      </main>
    </>
  )
}

export default memo(HomePage)
