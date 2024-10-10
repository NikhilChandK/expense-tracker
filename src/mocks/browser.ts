import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
// Start the worker and specify the custom service worker URL (if needed)
worker.start({
    serviceWorker: {
        url: '/mockServiceWorker.js', // Specify the correct path if not using `public`
    },
});
