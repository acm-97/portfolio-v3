import {memo} from 'react'
import {GITHUB, LINKEDIN, INSTAGRAM, TWITER, GMAIL} from '@/app/constants'
import {Icon, RevealList} from '@/app/components'
import Link from 'next/link'

// type SocialsProps = {};

const Socials = () => (
  <RevealList delay={400}>
    <div className="fixed bottom-0 left-10 right-auto z-10 w-10 max-lg:left-5 max-md:hidden">
      <ul className="m-0 flex list-none flex-col items-center p-0 tracking-widest text-primary-main after:m-[0_auto] after:block after:h-24 after:w-[1px] after:bg-gray-main after:content-['']">
        <li>
          <Icon name="GitHub" linkProps={{href: GITHUB}} />
        </li>
        <li>
          <Icon name="Instagram" linkProps={{href: INSTAGRAM}} />
        </li>
        <li>
          <Icon name="Twiter" linkProps={{href: TWITER}} />
        </li>
        <li className="mb-3">
          <Icon name="LinkedIn" linkProps={{href: LINKEDIN}} />
        </li>
      </ul>
    </div>
    <div className="fixed bottom-0 left-auto right-10 z-10 w-10 max-lg:right-5 max-md:hidden">
      <div className="m-0 flex flex-col items-center p-0 tracking-widest text-primary-main after:m-[0_auto] after:block after:h-24 after:w-[1px] after:bg-gray-main after:content-['']">
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL as string}`}
          className=" mx-auto my-5 p-2 font-mono text-xs tracking-widest text-primary-main [writing-mode:vertical-lr] hover:text-secondary-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          {GMAIL}
        </Link>
      </div>
    </div>
  </RevealList>
)

export default memo(Socials)
