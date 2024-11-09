// src/components/CertificateCard.js
import React from 'react';
import styles from './certificate.module.css'


function CertificateCard({ title, number }) {
  return (
    <div className={styles["box"]}>
    <div className={styles["number"]}><h1>{number}</h1></div>
    <p className={styles["title"]}>{title}</p>
    </div>
  );
}

export default CertificateCard;
