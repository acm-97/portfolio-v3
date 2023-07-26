import {memo, type ReactNode} from 'react'
import Link from 'next/link'

type ExperienceInfoProps = {
  position: string
  project: string
  projectLink?: string
  dateRange: string
  children: ReactNode[]
}

const ExperienceInfo = ({
  position,
  project,
  projectLink,
  dateRange,
  children,
}: ExperienceInfoProps) => (
  <>
    <h5>
      <>
        {position} <span className="text-secondary-main">@ </span>
        {projectLink ? (
          <Link
            className="link-underline"
            target="_blank"
            rel="noopener noreferrer"
            href={projectLink}
          >
            {project}
          </Link>
        ) : (
          {project}
        )}
      </>
    </h5>
    <span className="mb-5 mt-2 font-mono text-sm text-primary-dark">{dateRange}</span>
    <ul className="mb-16 p-0">
      {children.map((item, i) => (
        <li
          key={i}
          className="relative mb-2 pl-7 text-primary-dark before:absolute before:left-0 before:text-secondary-main before:content-['▹']"
        >
          {item}
        </li>
      ))}
    </ul>
  </>
)

export default memo(ExperienceInfo)
