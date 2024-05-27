import Link from "next/link";
import React from "react";
import Image from "next/image";
import SvgLogo from "../public/icon.svg";

function Footer() {
  return (
    <footer>
      <section className="footer-head flex f-wrap">
        <div>
          <Image src={SvgLogo} alt="nsimple nav logo" width={50} height={50} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            error minus vitae asperiores? Quae cum porro tempore cumque aperiam
            recusandae sunt atque a, debitis soluta at assumenda neque eaque
            quia!
          </p>
        </div>
        <div>
          <h2>Fast Links</h2>
          <div className="flex f-column">
            <Link href={""}>Login</Link>
            <Link href={""}>Register</Link>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <div className="flex f-column">
            <span>54/29 West 21st Street, New York, 10010, USA</span>
            <a href={"tel:06000000000"}>06000000000</a>
            <a href={"mailto:contact@hiretop.com"}>contact@hiretop.com</a>
          </div>
        </div>
      </section>
      <section className="footer-foot">
        <p>
          <b>@2024-Hiretop.</b>
          Designed by Evans Dsv
        </p>
      </section>
    </footer>
  );
}

export default Footer;
