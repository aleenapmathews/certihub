import { cookies } from "next/headers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ManageCertificates from "../components/ManageCertificate";
import { getDocumentsWithUserId } from "../db.mjs";

export default async function Page() {
  const cookieStore = await cookies();
  const user_id = cookieStore.get("user_id").value;
  console.log(user_id);

  const certificates = getDocumentsWithUserId(user_id);

  return (
    <div>
      <Header />


      <ManageCertificates certificates={certificates}></ManageCertificates>

      <Footer />
    </div>
  );
}
