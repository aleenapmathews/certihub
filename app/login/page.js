"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { userStore } from "../stores/user";
import { useRouter } from "next/navigation";
import loginAction from "../actions/login";
// import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setUserLogin = userStore((state) => state.setUserLogin);
  const router = useRouter();
  const setUserId = userStore((state) => state.setUserId);
  const setUserName = userStore((state) => state.setUserName);
  const handleLogin = async (e) => {
    e.preventDefault();
    const user_id = await loginAction(username, password);
    setUserName(username)
    // Handle login logic here
    setUserLogin();
    setUserId(user_id);
    router.push("/");
  };

  return (
    <div className={styles["body"]}>
      <Header />
      <Form
        title="Login"
        onSubmit={handleLogin}
        //  action={loginAction}
      >
        <div className={styles["input-grp"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles["input-grp"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Form>
      <Footer />
    </div>
  );
}

export default LoginPage;
