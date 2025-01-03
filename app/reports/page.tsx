"use client";
import React, { useState } from "react";
import Reports from "../components/reports";
  // Import the Reports component
  interface ReportData {
    anomalies: [];
    violations: {
      income: number;
      expenses: number;
      deductions: number;
      zscore: number;
      deduction_change: number;
    }[];
}

const ReportsPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  interface ResponseData {
    violations: ReportData[]; 
    [key: string]: string | number | boolean | object | null | undefined; 
  }

  const [response, setResponse] = useState<ResponseData | null>(null); // Use a specific type for the response data
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true); // Set loading state to true when uploading starts
      const res = await fetch("/api/upload-csv", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("File upload failed");
      }

      const data = await res.json();
      console.log(data);
      setResponse(data); // Set the server response
      setLoading(false); // Set loading to false once the upload is complete
    } catch (error) {
      console.error("Error uploading file", error);
      setLoading(false); // Stop loading in case of an error
    }
  };

  return (
    <div>
      <h1>Upload CSV File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
        <div>
          <h2>Response:</h2>

          {response && <Reports/>}
        </div>
    </div>
  );
};

export default ReportsPage;
