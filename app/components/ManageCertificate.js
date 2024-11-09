import Link from "next/link";
import styles from "./manage-certificate.module.css";

export default function ManageCertificates({ certificates }) {
 
  return (
    <section>
      <h2>Manage Certificates</h2>
      <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Link href="/newdoc">
          <button style={{}}>UPLOAD</button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Subject</th>
            <th>Issuer</th>
            <th>Expiry Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate, index) => (
            <tr key={certificate.id}>
              <td>{index + 1}</td>
              <td>{certificate.url}</td>
              <td>{certificate.file_name}</td>
              <td>{certificate.issuer}</td>
              <td>{certificate.expiry_date}</td>
              <td>
                <button className={styles["dlt"]}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}