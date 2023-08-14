import {memo} from 'react'
import {Button, RevealList} from '@/app/components'

type ComponentProps = {t: any}

const Home = ({t}: ComponentProps) => {
  return (
    <RevealList
      className="flex w-full flex-col items-start text-start"
      delay={600}
      interval={200}
      easing="ease-in"
    >
      <h6 className="mb-5 ml-1 font-mono font-normal text-secondary-main">{t('home:salute')}</h6>

      <h1 className="mb-1 font-black">{t('home:name')}</h1>
      <h1 className="font-black text-primary-dark">
        {t('home:occupation.part1')} <span className="text-secondary-main">UI</span>{' '}
        {t('home:occupation.part2')}.
      </h1>
      <p className="mt-5 max-w-xl text-xl text-primary-dark">{t('home:description')}</p>
      <div>
        <Button variant="outlined" href="/alejandro_cv.pdf" className="mt-12 capitalize" download>
          {t('home:downloadResume')}
        </Button>
      </div>
    </RevealList>
  )
}

export default memo(Home)
