import {memo} from 'react'
import {Trans} from 'react-i18next'
import {CRAI, DOFLEINI} from '@/app/constants'
import {SectionHeader as Header, RevealList, RevealWrapper} from '@/app/components'
import Image from 'next/image'
import profileImage from '../../../public/profile.png'

type AboutProps = {t: any; lng: string}

function About({t, lng}: AboutProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className="w-full">
      <RevealWrapper delay={200} origin="left">
        <Header num={1} text={t('about:title')} />
      </RevealWrapper>
      <RevealList
        delay={300}
        interval={200}
        component="ul"
        className="mb-16 grid w-full list-none grid-cols-[3fr_2fr] gap-12 max-md:block"
      >
        <li className="text-xl ">
          <p className=" mb-6">{t('about:history.part1')}</p>
          <p className="relative mb-6">
            <Trans
              defaults={t('about:history.part2')}
              values={{
                crai:
                  lng === 'en'
                    ? 'learning and research resources center'
                    : 'centro de recursos para aprendizaje e información',
                dofleini:
                  lng === 'en'
                    ? 'software development company'
                    : 'compañia de desarrollo de software',
              }}
              components={[
                <a
                  key={CRAI}
                  className="text-secondary-main hover:text-secondary-dark"
                  href={CRAI}
                />,
                <a
                  key={DOFLEINI}
                  className="text-secondary-main hover:text-secondary-dark"
                  href={DOFLEINI}
                />,
              ]}
            />
          </p>
          <p className="mb-6">{t('about:history.part3')}</p>
          <ul className="grid grid-cols-[repeat(2,minmax(8.75rem,12.5rem))] gap-x-2.5 gap-y-0 overflow-hidden p-0 text-primary-dark">
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              JavaScript (ES6+)
            </li>
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              TypeScript
            </li>
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              React.js
            </li>
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              Next.js
            </li>
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              Angular
            </li>
            <li className="relative flex items-center pl-8 font-mono text-sm before:absolute before:left-0 before:leading-3 before:text-secondary-main before:content-['</>']">
              Python
            </li>
          </ul>
        </li>
        <li>
          <div className="group relative z-0 max-w-[18.75rem] grayscale hover:grayscale-0 max-md:m-[3.2rem_auto_0]">
            <div className="relative z-10 h-full w-auto overflow-hidden rounded-xl border border-solid border-transparent text-xs font-semibold transition-[0.5s] group-hover:scale-105 group-hover:contrast-[120%]">
              <div className="relative h-auto w-full ">
                <Image
                  priority
                  sizes="100vw"
                  alt="profile.png"
                  objectFit="cover"
                  src={profileImage}
                />
              </div>
              <div className="absolute bottom-11 right-[-1000%] z-30 skew-x-[-5deg] bg-primary-main px-4 py-2.5 text-primary-main transition-[0.3s] group-hover:right-[-2%]">
                {t('about:fullName')}
              </div>
              <div className="before:content-['</>'] after:content-['</>'] absolute bottom-4 right-[-1000%] z-20 skew-x-[-5deg] bg-teal-main px-4 py-2.5 font-mono text-primary-darker transition-[0.3s] before:mr-1.5 before:text-primary-dark after:ml-1.5 after:text-primary-dark group-hover:right-[-2%]">
                {t('about:occupation')}
              </div>
            </div>
            <div className="absolute left-[7%] top-[6%] -z-10 h-full w-full rounded-xl border border-solid border-teal-main transition-[0.3s] group-hover:scale-105 group-hover:contrast-[120%]">
              <div className="relative h-auto w-full opacity-0">
                <Image
                  priority
                  fill
                  sizes="100vw"
                  alt="profile.png"
                  src={profileImage}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </li>
      </RevealList>
    </div>
  )
}

export default memo(About)
