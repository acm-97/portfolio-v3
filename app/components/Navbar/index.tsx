'use client'
import {memo, useRef, useEffect, useState, type ReactNode} from 'react'
import NavMenu from './NavMenu'
import {scrollToTop} from '@/app/utils'
import {Icon, LoaderIcon, SiteLogo} from '@/app/components'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {useGithubProjects} from '@/app/contexts'

type NavBarProps = {children: ReactNode; lng: string}

const Navbar = ({children, lng}: NavBarProps) => {
  const refDrawer = useRef<HTMLDivElement>(null)
  const refDrawerInput = useRef<HTMLInputElement>(null)
  const [drawerInput, setDrawerInput] = useState<HTMLInputElement | null>(null)
  const [hash, setHash] = useState<string>('')

  const handleChecked = (checked: boolean) => {
    if (checked && refDrawer?.current) {
      refDrawer.current.style.height = '100dvh'
    } else if (refDrawer?.current) refDrawer.current.style.height = '100%'
  }

  useEffect(() => {
    setHash(window.location.hash)
  }, [])

  useEffect(() => setDrawerInput(refDrawerInput.current), [refDrawerInput])

  const pathname = usePathname()
  const {isLoading} = useGithubProjects()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(false)
    const timeout = setTimeout(() => setIsMounted(true), 2500)
    return () => clearTimeout(timeout)
  }, [pathname])

  if (isLoading || !isMounted) {
    return (
      <>
        <div className="flex min-h-[100vh] w-full items-center justify-center">
          <LoaderIcon width={300} />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="drawer drawer-end h-full flex-col" ref={refDrawer}>
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          onClick={(e: any) => handleChecked(e.target.checked)}
          ref={refDrawerInput}
        />
        <div className="drawer-content h-full w-full overflow-hidden">
          {/* <!-- Navbar --> */}
          <div className="navbar fixed left-0 top-0 z-[999] h-16 w-full bg-[#2a303cd9] px-4 text-sm backdrop-blur-sm transition-transform delay-75 sm:px-9">
            <div className="mx-2 flex-1 px-2">
              <Link href="/" className="rounded-lg px-2 hover:bg-hover" onClick={() => setHash('')}>
                <SiteLogo />
              </Link>
            </div>
            <div className="hidden flex-none md:block">
              <NavMenu hash={hash} setHash={setHash} lng={lng} horizontal />
            </div>
            <div className="flex-none md:hidden">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>

        {/* <!-- Sidebar here --> */}
        <div className="drawer-side z-[1200] md:hidden">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="my-drawer-3" className="drawer-overlay" />
          <NavMenu
            hash={hash}
            setHash={setHash}
            lng={lng}
            drawerInput={drawerInput}
            handleDrawer={handleChecked}
          />
        </div>
      </div>
    </>
  )
}

export default memo(Navbar)
