import { handleAuth,handleLogin } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: '/dashboard',
    }),
    onError(){
        redirect('/api/auth/logout');      
    }
});