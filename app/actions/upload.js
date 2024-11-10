"use server";

import { redirect } from "next/navigation";
import fs from "node:fs/promises";
import { createDocument } from "../db.mjs";

export async function handleUploadServer(formData) {
  console.log(formData);
  const file = formData.get("file");
  const title = formData.get("title");
  const user_id = formData.get("user_id");
  const issuer = formData.get("issuer");
  const expiry_date = formData.get("expiry date");
  console.log(expiry_date);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fs.writeFile(`./public/uploads/${file.name}`, buffer);
  createDocument(user_id, `uploads/${file.name}`, title, expiry_date, issuer);
  redirect("/manage-certificates");
}
