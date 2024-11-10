"use client";

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import styles from "../login/login.module.css";
import { handleUploadServer } from "../actions/upload";
import { userStore } from "../stores/user";
// import { Uploader } from "../components/Uppy";

export default function NewDocPage() {
  const user_id = userStore((state) => state.user_id);
  return (
    <div>
      <Header></Header>
      <Form
        title="Upload File"
        upload="Upload"
        action={handleUploadServer}
        // onSubmit={handleUpload}
      >
        <div className={styles["input-grp"]}>
          <label htmlFor="title">Title</label>
          <input
            style={{ width: "300px" }}
            name="title"
            type="text"
            id="title"
          />
        </div>

        <div className={styles["input-grp"]}>
          <label htmlFor="issuer">Issuer</label>
          <input
            style={{ width: "300px" }}
            name="issuer"
            type="text"
            id="issuer"
          />
        </div>

        <div className={styles["input-grp"]}>
          <label htmlFor="expiry date">Expiry Date</label>
          <input
            style={{ width: "300px" }}
            name="expiry date"
            type="date"
            id="expiry date"
          />
        </div>

        <div className={styles["input-grp"]}>
          <label htmlFor="file">File</label>
          <input style={{ width: "300px" }} type="file" name="file" id="file" />
        </div>
        <input
          type="number"
          defaultValue={user_id}
          name="user_id"
          hidden={true}
        />
      </Form>
      <Footer></Footer>
    </div>
  );
}
