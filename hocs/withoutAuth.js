"use client";
import { FullPageSpinner } from "@/uikits/others";
import { useAuth } from "../contexts/authContext";
import { redirect, usePathname } from "next/navigation";
import { NotConnectedNav } from "@/uikits/navbar";
import Footer from "@/uikits/footer";

export const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const { user, userLoading } = useAuth();

    // const router = useRouter();
    // const { backUrl } = router.query;

    if (userLoading) return <FullPageSpinner />;

    if (user) {
      return redirect("/dashboard");
    }

    return (
      <WithoutAuthHocWrapper>
        <WrappedComponent {...props} />
      </WithoutAuthHocWrapper>
    );
  };
};

export function WithoutAuthHocWrapper({ children }) {
  const pathname = usePathname();
  return (
    <>
      {!["/login", "/register"].includes(pathname) && <NotConnectedNav />}
      {children}
      {!["/login", "/register"].includes(pathname) && <Footer />}
    </>
  );
}
