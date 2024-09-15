import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { docsConfig } from '../../config/docs'
import { siteConfig } from '../../config/site'
import useScreenSize from '../../hooks/use-screen-size'
import { MobileMenu } from '../mobile-menu'

const MainNav = (): ReactElement => {
  const { isMobile } = useScreenSize()
  return (
    <>
      <div className="mx-5 my-0 flex items-center justify-between gap-8">
        <span className="cursor-pointer p-4">{siteConfig.name}</span>
        <nav className="hidden sm:flex">
          {docsConfig.mainNav.map((item) => (
            <NavLink to={`${item.href}`} key={item.title} className={'p-4'}>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
      {isMobile && <MobileMenu />}
    </>
  )
}

export { MainNav }
