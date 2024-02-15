import { useAuth } from "@/contexts/authContext";
import { AuthedHocWrapper } from "./withAuth";
import { FullPageSpinner } from "@/uikits/others";
import { WithoutAuthHocWrapper } from "./withoutAuth";


export const bothAuth = (WrappedComponent) => {
    return (props) => {
        const { user, userLoading } = useAuth();

        if (userLoading)
            return <FullPageSpinner />;

        if (user) {
            return <AuthedHocWrapper>
                <WrappedComponent {...props}
                    user={user}
                />
            </AuthedHocWrapper>
        }

        return <WithoutAuthHocWrapper>
            <WrappedComponent {...props} />
        </WithoutAuthHocWrapper>
    };
};