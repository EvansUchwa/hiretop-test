import { useAuth } from "@/contexts/authContext";
import { AuthedHocWrapper } from "./withAuth";


export const bothAuth = (WrappedComponent) => {
    return (props) => {
        const { user, userLoading } = useAuth();

        if (userLoading)
            return 'Chargement';

        if (user) {
            return <AuthedHocWrapper>
                <WrappedComponent {...props}
                    user={user}
                />
            </AuthedHocWrapper>
        }

        return <WrappedComponent {...props} />
    };
};