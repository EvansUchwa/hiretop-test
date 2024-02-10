'use client';
import { useAuth } from "../contexts/authContext";
import { redirect } from 'next/navigation'

export const withoutAuth = (WrappedComponent) => {
    return (props) => {
        const { user, userLoading } = useAuth();
        // const router = useRouter();
        // const { backUrl } = router.query;

        if (userLoading)
            return 'Chargement..........';

        if (user) {
            return redirect('/dashboard');
        }

        return <WrappedComponent {...props} />
    };
};