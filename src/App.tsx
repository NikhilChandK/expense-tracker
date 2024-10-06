import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { routes } from './router/config';

const router = createBrowserRouter(routes);
const App = (): ReactElement => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export { App };
