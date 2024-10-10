import { jwtDecode } from 'jwt-decode';

const DecodeToken = (token: string): string => {
    const decoded = jwtDecode<string>(token);

    return decoded;
};
export { DecodeToken };
