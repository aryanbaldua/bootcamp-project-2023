import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import "@/app/global.css";


export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.nav} >
      <h1>Aryan's Personal Website</h1>
      <nav className="navbar">
            <ul className="nav-list">
                <ul className="nav"><Link href="../">Home</Link></ul>
                <ul className="nav"><Link href="../blog">Blog</Link></ul>
                <ul className="nav"><Link href="../portfolio">Portfolio</Link></ul>
                <ul className="nav"><Link href="../resume">Resume</Link></ul>
                <ul className="nav"><Link href="../contact">Contact</Link></ul>
            </ul>
        </nav>
    </header>
  );
}