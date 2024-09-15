import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { MainNav } from '../components/main-nav'

const MainLayout = (): ReactElement => {
  return (
    <>
      <div className="sticky top-0 flex items-center justify-between bg-slate-950 text-white">
        <MainNav />
      </div>
      <Outlet />
    </>
  )
}

export default MainLayout
