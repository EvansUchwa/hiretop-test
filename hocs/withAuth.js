'use client';
import { ConnectedNavbar } from "@/uikits/navbar";
// import { useRouter } from "next/router";
import { useAuth } from "../contexts/authContext";
import { redirect, usePathname } from 'next/navigation'
import Sidebar from "@/uikits/sidebar";
import FinaliseAccount from "@/components/finaliseAccount";
import { FullPageSpinner } from "@/uikits/others";
import { NavbarProvider, useNavbar } from "@/contexts/navContext";
// import Page404 from "../pageComponents/404";

export const withAuth = (WrappedComponent, specificRole = false) => {
    return (props) => {
        const { user, userLoading } = useAuth();

        // const router = useRouter();
        const pathname = usePathname()

        if (userLoading)
            return <FullPageSpinner />;

        if (!user) {
            return redirect('/login');
            // return;
        }

        if (!user.role) {
            return <FinaliseAccount />
        }


        if (specificRole && user.role != specificRole) {
            return '404'
        }

        return <AuthedHocWrapper>
            <WrappedComponent {...props}
                user={user}
            />
        </AuthedHocWrapper>;
    };
};
export function AuthedHocWrapper({ children }) {
    return <NavbarProvider>
        <main className="dashboardPageWrapper">
            <ConnectedNavbar />
            <Sidebar />
            <div className="dpw-content">
                {children}
            </div>
        </main>
    </NavbarProvider>;
}