// src/components/Form.js
// import './Components.css';
import styles from "./form.module.css";

function Form({ title, onSubmit, children,action, upload = "Submit" }) {
  return (
    <div className={styles["form-container"]}>
      <h2>{title}</h2>
      <form  action={action} onSubmit={onSubmit}>
        {children}

        <button type="submit">{upload}</button>
      </form>
    </div>
  );
}

export default Form;
