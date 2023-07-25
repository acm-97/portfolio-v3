import {type ReactNode, memo} from 'react'
import cls from 'classnames'
import {cva, type VariantProps} from 'class-variance-authority'
import Link from 'next/link'

const buttonStyles = cva('btn rounded font-mono', {
  variants: {
    variant: {
      contained: '',
      outlined: 'border-teal-main',
    },
    color: {
      primary: 'bg-teal-main text-primary-darker',
      secondary: ' bg-transparent text-secondary-main',
    },
  },
  defaultVariants: {
    variant: 'contained',
    color: 'primary',
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & {
  className?: string
  children: ReactNode
  onClick?: () => void
  variant?: string
  color?: string
  href?: string
  locale?: string | false | undefined
}

const Button = ({className, children, onClick, variant, color, href, locale}: ButtonProps) =>
  href ? (
    <Link href={href} locale={locale} className={cls(buttonStyles({variant, color}), className)}>
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={cls(buttonStyles({variant, color}), className)}
      onClick={onClick}
    >
      {children}
    </button>
  )

export default memo(Button)
