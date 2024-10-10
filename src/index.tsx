import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

async function enableMocking() {
    if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('./mocks/browser');
        await worker.start({
            onUnhandledRequest: 'bypass', // Change this if needed
            quiet: false, // Enable logging for debugging
        });
    }
}

void (async () => {
    await enableMocking(); // Ensure mocking is set up before rendering the app
    const rootElement = document.getElementById('root');
    if (rootElement === null) {
        throw new Error('No root element found');
    }
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
})();
