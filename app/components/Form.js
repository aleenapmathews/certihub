"use client";
import styles from "./form.module.css";
import { useFormStatus } from "react-dom";

function Form({ title, onSubmit, children, action, upload = "Submit" }) {
  const a = useFormStatus();
  console.log(a);
  return (
    <div className={styles["form-container"]}>
      <h2>{title}</h2>
      <form action={action} onSubmit={onSubmit}>
        {children}

        <button type="submit">{upload}</button>
      </form>
    </div>
  );
}

export default Form;
