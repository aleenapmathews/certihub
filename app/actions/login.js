"use server";

import { redirect } from "next/navigation";
import { createUser, getUserIdWithUsernameAndPassword } from "../db.mjs";
import { cookies } from "next/headers";

export default async function loginAction(username, password) {
  // const password = formData.get("password");
  // const username = formData.get("username");
  const cookieStore = await cookies();

  const user_id = getUserIdWithUsernameAndPassword(username, password);
  if (user_id == -1) {
    console.log("user is created");
    createUser(username, password);
    const userId = getUserIdWithUsernameAndPassword(username, password);
    cookieStore.set("user_id", userId);
    cookieStore.set("username", username);

    return userId;
  } else {
    console.log("already exists");
    cookieStore.set("user_id", user_id);
    cookieStore.set("username", username);

    return user_id;
  }

  // redirect("/");
}
