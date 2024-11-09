// src/pages/LogoutPage.js
"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/user";
import styles from "./LogoutPage.module.css";
import { useRouter } from "next/navigation";

function LogoutPage() {
  const router = useRouter();
  const setUserLogout = userStore((state) => state.setUserLogout);
  const setUserId = userStore((state) => state.setUserId);
  useEffect(async () => {
    const cookieStore = await cookies();

    // Handle logout logic (e.g., clear session, tokens)
    console.log("User logged out");
    // Redirect to login page after logout
    setUserLogout();
    setUserId(-1);
    cookieStore.delete("username");
    cookieStore.delete("user_id");
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h2>Logout</h2>
        <div className={styles["logout-container"]}>
          <p className={styles["para"]}>
            You have been logged out successfully.
          </p>
          <button onClick={() => router.push("/login")}>Login Again</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogoutPage;
