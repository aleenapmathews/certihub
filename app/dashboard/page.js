// src/pages/DashboardPage.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";
import styles from '../components/certificate.module.css'


function DashboardPage() {
  return (
    <div>
      <Header />
      <h2 className="heading">Certificate Overview</h2>
      <div className={styles["cards"]}>
        <CertificateCard title="Total Certificates" number="00" />
        <CertificateCard title="Expiring Soon" number="00" />
        <CertificateCard title="Pending Renewals" number="00" />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
