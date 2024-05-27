"use client";
import React, { useEffect, useState } from "react";
import {
  CircleFlagsFr,
  CircleFlagsUs,
  MaterialSymbolsLogout,
  MaterialSymbolsMenu,
  MaterialSymbolsSearch,
} from "./icon";
import Link from "next/link";
import { useNavbar } from "@/contexts/navContext";
import { useAuth } from "@/contexts/authContext";
import { checkUrl } from "@/utils/front/others";
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/contexts/langContext";
import Image from "next/image";
import SvgLogo from "../public/icon.svg";
import SimpleButton from "./button";
import { useModal } from "@/contexts/modalContext";
import { ConfirmationModal } from "./modal";

export function NotConnectedNav() {
  const { lang, changeLang, navLinksL, buttonsL } = useLang();
  const [mobileNavVisible, setMNV] = useState(false);
  const [pageScroll, setPS] = useState(false);

  const pathname = usePathname();

  function onNavScroll() {
    if (window.scrollY > 100) {
      setPS(true);
    } else {
      setPS(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  useEffect(() => {
    if (mobileNavVisible) {
      setMNV(false);
    }
  }, [pathname]);
  return (
    <nav
      className={
        "notConnectedNav " + (pageScroll ? " notConnectedNavOnScroll " : "")
      }
    >
      <section className="ncn-logo">
        <Image src={SvgLogo} alt="nsimple nav logo" width={50} height={50} />
        <span>HIRETOP</span>
      </section>

      <div
        className={
          "ncn-mobileMenuToggle " +
          (mobileNavVisible ? "ncn-mobileMenuToggleActive" : "")
        }
        onClick={() => setMNV((prev) => !prev)}
      >
        <MaterialSymbolsMenu />
      </div>

      <div
        className={"ncn-left " + (mobileNavVisible ? "ncn-left-mobile" : "")}
      >
        {mobileNavVisible && (
          <span onClick={() => setMNV((prev) => !prev)}>Fermer</span>
        )}

        <section className="ncn-links">
          <Link href={"/"}>{navLinksL.home}</Link>
          <Link href={"/job/all"}>{navLinksL.allJobList}</Link>
          <Link href={"/talent/all"}>{navLinksL.talentList} </Link>
        </section>

        <section className="ncn-actions">
          <SimpleButton
            text={buttonsL.login}
            defaultBg="transparent"
            defaultColor="black"
            isLink={"/login"}
          />
          <SimpleButton text={buttonsL.register} isLink={"/register"} />
        </section>
      </div>
      <div className="langToggler">
        <span onClick={() => changeLang(lang == "fr" ? "en" : "fr")}>
          {lang == "fr" ? <CircleFlagsUs /> : <CircleFlagsFr />}
        </span>
      </div>
    </nav>
  );
}

export function ConnectedNavbar() {
  const { lang, changeLang, infosL } = useLang();
  const { user, logout } = useAuth();
  const { toggleSidebar, sidebarVisible } = useNavbar();
  const [searchKey, setSK] = useState(null);
  const router = useRouter();
  const { showModal } = useModal();

  function handleSearchKeyChange(e) {
    const { value } = e.target;
    setSK(value);
  }
  function redirectToSearchResultPage() {
    router.push(
      user.role == "talent"
        ? "/job/all?searchJobKeyword=" + searchKey
        : "/talent/all?searchTalentKeyword=" + searchKey
    );
  }

  function confirmLogout() {
    showModal(
      <ConfirmationModal
        title={infosL.reallyWantToLogout}
        operationAfterValidation={() => logout()}
      />
    );
  }
  return (
    <nav
      className={
        "navbar2 flex " + (sidebarVisible ? "" : "sidebarVisbleNavStyle")
      }
    >
      <div className="n2-toggler">
        <span onClick={() => toggleSidebar(true)}>
          <MaterialSymbolsMenu />
        </span>
      </div>

      <div className="n2-searchbar">
        <input type="search" onChange={handleSearchKeyChange} />
        <span onClick={redirectToSearchResultPage}>
          <MaterialSymbolsSearch />
        </span>
      </div>

      <div className="n2-actionsIcons flex">
        {/* <span>
                    <MaterialSymbolsAndroidMessages />
                </span>
                <span>
                    <Link href={''}>
                        <MaterialSymbolsNotificationsRounded />
                    </Link>
                </span> */}
        <Link href="/account" className="flex">
          <img
            src={checkUrl(user.profilPic.url)}
            alt="user connected profil pic"
          />
          <b>{user.role == "talent" ? user.firstname : user.societyName} </b>
        </Link>
        <span onClick={confirmLogout}>
          <MaterialSymbolsLogout />
        </span>
        <span onClick={() => changeLang(lang == "fr" ? "en" : "fr")}>
          {lang == "fr" ? <CircleFlagsUs /> : <CircleFlagsFr />}
        </span>
      </div>
    </nav>
  );
}
