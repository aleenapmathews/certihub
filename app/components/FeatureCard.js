// src/components/FeatureCard.js
import React from 'react';
import styles from './feature.module.css'

function FeatureCard({ title, description }) {
  return (
    <div className={styles["feature"]}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
