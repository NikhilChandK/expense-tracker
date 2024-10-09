import { RouteObject } from 'react-router-dom';
import MainLayout from '../Layouts-temp/MainLayout';
import { PathConstants } from './constants';
import { Login } from '../components/login';
import { RouteGuard } from './route-guard';
import Settings from '../components/settings/setttings';

const routes: RouteObject[] = [
    {
        path: PathConstants.ROOT,
        element: <RouteGuard />,
        errorElement: <h1>error element</h1>,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <h1>Root</h1>,
                    },
                    {
                        path: PathConstants.LOGIN,
                        element: <Login />,
                    },
                    {
                        path: PathConstants.OVERVIEW,
                        element: <h1>OVERVIEW</h1>,
                    },
                    {
                        path: PathConstants.ANALYSIS,
                        element: <h1>Analysis</h1>,
                    },
                    {
                        path: PathConstants.NOTIFICATIONS,
                        element: <h1>Notifications</h1>,
                    },
                    {
                        path: PathConstants.SETTINGS,
                        element: <Settings />,
                    },
                ],
            },
        ],
    },
];
export { routes };
