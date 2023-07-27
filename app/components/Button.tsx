import {type ReactNode, memo} from 'react'
import cls from 'classnames'
import {cva, type VariantProps} from 'class-variance-authority'
import Link from 'next/link'

const buttonStyles = cva('btn rounded font-mono', {
  variants: {
    variant: {
      contained: 'text-secondary-main',
      outlined:
        'btn-outline border-teal-main bg-transparent capitalize text-secondary-main hover:bg-teal-darker',
    },
  },
  defaultVariants: {
    variant: 'contained',
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & {
  className?: string
  children: ReactNode
  onClick?: (e: any) => void
  variant?: string
  href?: string
  locale?: string | false | undefined
  download?: boolean
}

function Button({className, children, onClick, variant, href, locale, download}: ButtonProps) {
  if (download) {
    return (
      <a href={href} className={cls(buttonStyles({variant}), className)} download>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} locale={locale} className={cls(buttonStyles({variant}), className)}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={cls(buttonStyles({variant}), className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default memo(Button)
