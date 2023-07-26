'use client'
import {memo, useEffect, useRef} from 'react'
import classNames from 'classnames'

import {HideShowNav, scrollToHashSection} from '@/app/utils'
import {
  Home,
  About,
  Experience,
  //  MyBuilds, NoteworthyProjects, Contact
} from './components'
import {Head} from '@/app/components'
import {useTranslation} from '../i18n/client'

type HomeProps = {params: {lng: string}}

const HomePage = ({params: {lng}}: HomeProps) => {
  const {t} = useTranslation(lng, ['home', 'about', 'experience'])

  const sectionAbout = useRef<HTMLDivElement>(null)
  const sectionExperience = useRef<HTMLDivElement>(null)
  const sectionMyBuilds = useRef<HTMLDivElement>(null)
  const sectionContact = useRef<HTMLDivElement>(null)

  const sections = [
    {key: 'home', component: <Home t={t} />, ref: null},
    {key: 'about', component: <About t={t} lng={lng} />, ref: sectionAbout},
    {key: 'experience', component: <Experience t={t} />, ref: sectionExperience},
    // {key: 'work', component: <MyBuilds />, ref: sectionMyBuilds},
    // {key: 'noteworthyProjects', component: <NoteworthyProjects />, ref: null},
    // {key: 'contact', component: <Contact />, ref: sectionContact},
  ]

  useEffect(() => {
    HideShowNav()
  })

  // useEffect(() => {
  //   showSections();
  // }, []);

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
