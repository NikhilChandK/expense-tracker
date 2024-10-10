import { http, HttpResponse } from 'msw';
import { endpoints } from '../services/endpoints';

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.DjwRE2jZhren2Wt37t5hlVru6Myq4AhpGLiiefF69u8';

export const handlers = [
    http.post(endpoints.LOGIN, async ({ request }) => {
        await request.json();
        return HttpResponse.json({
            jwtToken: token,
            refreshToken: token,
        });
    }),
];
