"use server";
import { redirect } from "next/navigation";
import { deleteDoc } from "../db.mjs";
// import { revalidatePath } from "next/cache";

export default async function deleteDocAction(formData) {
  const docId = formData.get("id");
  console.log(docId);
  deleteDoc(docId);
  redirect("/manage-certificates");
}
