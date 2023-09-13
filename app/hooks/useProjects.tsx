import {Trans, useTranslation} from 'react-i18next'
import {type ReactNode} from 'react'

export type PersonalProjectsProps = {
  name: string
  description: ReactNode
  keyWords: string[]
  github: string
  website: string
  image: string
}

const useProjects = () => {
  const {t} = useTranslation('work')
  const personalProjects: PersonalProjectsProps[] = [
    {
      name: t('myBuilds.managementSystem.title'),
      description: t('myBuilds.managementSystem.description'),
      keyWords: ['Astro', 'React.js', 'TailwindCSS', 'Strapi'],
      github: 'https://github.com/acm-97/management-system',
      website: 'https://management-system-tan.vercel.app/',
      image: '/projects/management-system.png',
    },
    {
      name: 'ACMFolio',
      description: t('myBuilds.acmfolio.description'),
      keyWords: ['React', 'Styled Components', 'TypeScript'],
      github: 'https://github.com/acm-97/AcmFolio',
      website: 'https://portfolio-v2-swart-zeta.vercel.app/',
      image: '/projects/acmfolio.png',
    },
    {
      name: 'Snake Game',
      description: (
        <Trans
          defaults={t('myBuilds.snakegame.description')}
          values={{npm: 'NPM'}}
          components={[
            <a
              key={'snakegame'}
              className="underline"
              href="https://www.npmjs.com/package/@acm-97/react-snake-game"
            />,
          ]}
        />
      ),
      keyWords: ['React', 'CSS', 'TypeScript', 'NPM'],
      github: 'https://github.com/acm-97/react-snake-game',
      website: 'https://acm-97.github.io/react-snake-game/',
      image: '/projects/snakegame.png',
    },
  ]

  return {personalProjects}
}

export default useProjects
