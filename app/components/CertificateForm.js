"use client";
import React, { useState } from "react";
import axios from "axios"; // Import Axios

function CertificateForm() {
  const [certificateData, setCertificateData] = useState({
    serialNumber: "",
    subject: "",
    issuer: "",
    validFrom: "",
    expiryDate: "",
    status: "Active",
  });

  const handleChange = (event) => {
    setCertificateData({
      ...certificateData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send certificateData to backend for processing
      const response = await axios.post("/api/certificates", certificateData);

      // Handle successful certificate creation
      console.log("Certificate created successfully:", response.data);
      // Implement logic for successful creation, e.g., show a success message, redirect
      setCertificateData({
        serialNumber: "",
        subject: "",
        issuer: "",
        validFrom: "",
        expiryDate: "",
        status: "Active",
      });
    } catch (error) {
      console.error("Error creating certificate:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="serialNumber">Serial Number:</label>
        <input
          type="text"
          id="serialNumber"
          name="serialNumber"
          value={certificateData.serialNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={certificateData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="issuer">Issuer:</label>
        <input
          type="text"
          id="issuer"
          name="issuer"
          value={certificateData.issuer}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="validFrom">Valid From:</label>
        <input
          type="date"
          id="validFrom"
          name="validFrom"
          value={certificateData.validFrom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={certificateData.expiryDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={certificateData.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
          <option value="Pending Renewal">Pending Renewal</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CertificateForm;
