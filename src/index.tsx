import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

void (async () => {
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
