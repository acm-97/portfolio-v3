import {memo} from 'react'

import {GMAIL} from '@/app/constants'
import {Button, RevealList} from '@/app/components'

type ContactProps = {t: any}

const Contact = ({t}: ContactProps) => {
  return (
    <RevealList delay={800} interval={200} className="mx-auto mb-24 max-w-[37.5rem] text-center">
      <h6 className="mb-2 block font-mono font-normal text-secondary-main">
        04. {t('common:contactSection.title')}
      </h6>
      <h2 className="mb-7">{t('common:contactSection.started')}</h2>
      <p className="text-xl text-primary-dark">{t('common:contactSection.message')}</p>
      <div>
        <Button
          variant="outlined"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL as string}`}
          className="mt-12"
        >
          {t('common:contactSection.button')}
        </Button>
      </div>
    </RevealList>
  )
}

export default memo(Contact)
