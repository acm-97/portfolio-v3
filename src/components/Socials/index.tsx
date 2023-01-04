import { memo } from 'react';

import { GITHUB, LINKEDIN, INSTAGRAM, TWITER, GMAIL } from '@/constants';
import { Icon, Link } from '@/components';

// type SocialsProps = {};

const Socials = () => (
  <>
    <div className="fixed bottom-0 left-10 right-auto z-10 w-10 max-[1080px]:left-5 max-md:hidden">
      <ul className="socials m-0 flex list-none flex-col items-center p-0">
        <li>
          <Icon name="GitHub" linkProps={{ href: GITHUB }} />
        </li>
        <li>
          <Icon name="Instagram" linkProps={{ href: INSTAGRAM }} />
        </li>
        <li>
          <Icon name="Twiter" linkProps={{ href: TWITER }} />
        </li>
        <li className="mb-3">
          <Icon name="LinkedIn" linkProps={{ href: LINKEDIN }} />
        </li>
      </ul>
    </div>
    <div className="fixed bottom-0 right-10 left-auto z-10 w-10 max-[1080px]:right-5 max-md:hidden">
      <div className="socials relative flex flex-col items-center">
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL as string}`}
          className="font--mono writin text-vertical-rl tracking- my-5 mx-auto p-2 text-xs"
          external
        >
          {GMAIL}
        </Link>
      </div>
    </div>
  </>
);

export default memo(Socials);
