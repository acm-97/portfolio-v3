import {memo} from 'react'
import cls from 'classnames'

type SectionHeaderProps = {num: number; text: string; className?: string}

const SectionHeader = ({num, text, className = ''}: SectionHeaderProps) => (
  <h3
    className={cls(
      "max-md:after:w-full max-sm:after:ml-2.5 max-lg:after:w-48 after:content-[''] after:block after:relative after:w-80  after:h-0.5  after:ml-5  after:bg-[#ccd6f6] mb-10 mt-2 flex w-full items-center whitespace-nowrap",
      className,
    )}
  >
    <span className="mr-2 font-mono text-xl text-secondary-main">{`0${num}.`} </span>
    {text}
  </h3>
)
// )

export default memo(SectionHeader)
