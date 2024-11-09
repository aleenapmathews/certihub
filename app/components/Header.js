// src/components/Header.js
"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { userStore } from "../stores/user";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";

function Header() {
  const pathname = usePathname();

  const isLoggedIn = userStore((state) => state.isLoggedIn);
  // const user_id=userStore((state)=>state.user_id);
  const user_name=userStore((state)=>state.user_name);
  

  let isHome = false;
  if (pathname == "/") {
    isHome = true;
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["branding"]}>
          <Link href="/">
            <img className={styles["logo"]} src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <nav className={styles["nav"]}>
          {isLoggedIn == true ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/manage-certificates">Manage Certificates</Link>
              <Link href="/renewal-requests">Renewal Requests</Link>
              <Link href="/reports">Reports</Link>
              <Link href="/logout">Logout</Link>
              <p>{user_name}</p>
            </>
          ) : (
            <Link href="/login" className={styles["login-btn"]}>
              Login
            </Link>
          )}
        </nav>
      </div>
      {isHome ? (
        <h1 className={styles["welcome-text"]}>
          Welcome to the Digital Certificate Management System
        </h1>
      ) : null}
    </header>
  );
}

export default Header;
