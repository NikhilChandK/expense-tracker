import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from '../components/main-nav';
import { SplashScreenProvider } from '../components/splash-screen/SplashScreen';

const MainLayout = (): ReactElement => {
    return (
        <SplashScreenProvider>
            <div className="sticky top-0 flex items-center justify-between bg-slate-950 text-white">
                <MainNav />
            </div>
            <Outlet />
        </SplashScreenProvider>
    );
};

export default MainLayout;
