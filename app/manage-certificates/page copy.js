"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./manage_certificates.module.css";
import CertificateForm from "../components/CertificateForm";
import Link from "next/link";
import { userStore } from "../stores/user";

function ManageCertificatesPage() {
  const user_id = userStore((state) => state.user_id);
  const certificates = [
    {
      id: 123456,
      subject: "www.example.com",
      issuer: "Let's Encrypt",
      expiry: "2024-10-01",
      status: "Active",
    },
    // Add more certificates as needed
  ];

  const [isEdittingCertificate, setIsEdittingCertificate] = useState(null); // Track certificate being edited

  const handleEditClick = (certificateId) => {
    setIsEdittingCertificate(certificateId); // Set id of certificate to edit
  };

  const handleEditSubmit = (editedCertificate) => {
    // Send edited certificate data to backend for update
    console.log("Edited certificate:", editedCertificate);
    // ... update certificates state if successful
    setIsEdittingCertificate(null);
  };

  return (
    <div>
      <Header />
      <section>
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
            {certificates.map((certificate) => (
              <tr key={certificate.id}>
                <td>{certificate.id}</td>
                <td>{certificate.subject}</td>
                <td>{certificate.issuer}</td>
                <td>{certificate.expiry}</td>
                <td>{certificate.status}</td>
                <td>
                  {isEdittingCertificate === certificate.id ? (
                    <CertificateForm
                      certificate={certificate}
                      onSubmit={handleEditSubmit}
                    />
                  ) : (
                    <button onClick={() => handleEditClick(certificate.id)}>
                      Edit
                    </button>
                  )}
                  <button className={styles["dlt"]}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}

export default ManageCertificatesPage;
