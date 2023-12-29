import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import "@/app/global.css";


export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.nav} >
      <h1> Aryan's Personal Website </h1>
      <nav className="navbar">
            <h1 className="logo"><Link href="../">AB</Link></h1>
            <ul className="nav-list">
                <li className="nav"><Link href="../">Home</Link></li>
                <li className="nav"><Link href="../blog">Blog</Link></li>
                <li className="nav"><Link href="../portfolio">Portfolio</Link></li>
                <li className="nav"><Link href="../resume">Resume</Link></li>
                <li className="nav"><Link href="../contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}