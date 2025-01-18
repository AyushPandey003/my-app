import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="case-study">
      <header className="header">
        <h1 className="title">TaxView - Digital Forensics Web App</h1>
        <p className="intro">
          TaxView is a cutting-edge digital forensics tool designed to monitor fraudulent tax cases. It combines advanced analytics with a user-friendly interface to deliver actionable insights for financial professionals and investigators.
        </p>
      </header>

      <section className="overview">
        <div className="overview-content">
          <Image src="/images/taxview-dashboard.png" alt="TaxView Dashboard" className="overview-image" width={500} height={450} />
          <div className="overview-text">
            <h2>Overview</h2>
            <p>
              TaxView provides a comprehensive dashboard, role-based authentication, and an intuitive tax calculator tool. It integrates seamlessly with CSV financial data, offering robust fraud detection capabilities and rich chart visualizations powered by ApexCharts.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <h2>Case Studies</h2>
        <div className="case-studies-container">
          <div className="case-study-card">
            <h3>Fraud Detection in Corporate Taxes</h3>
            <p>
              A multinational corporation utilized TaxView to analyze discrepancies in their financial records. The app identified anomalies in expenses and deductions, saving the company millions by preventing fraudulent claims.
            </p>
          </div>
          <div className="case-study-card">
            <h3>Streamlining Tax Audits</h3>
            <p>
              Tax authorities adopted TaxView to streamline their auditing process. The interactive dashboard allowed auditors to quickly pinpoint suspicious transactions, reducing audit time by 30%.
            </p>
          </div>
          <div className="case-study-card">
            <h3>Small Business Financial Insights</h3>
            <p>
              A small business owner used TaxView to monitor financial health. The apps visualizations helped identify excessive expenses, leading to better budget management and increased profitability.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>Role-based authentication for secure access</li>
          <li>Fraud detection using anomaly detection algorithms</li>
          <li>Dynamic financial charts and dashboards</li>
          <li>CSV file upload for streamlined data analysis</li>
          <li>Intuitive tax calculator for quick assessments</li>
        </ul>
      </section>

      <section className="visuals">
        <h2>Data Visualizations</h2>
        <p>Transform raw financial data into stunning, interactive visualizations:</p>
          <Image src="/images/income-chart.png" alt="Income Chart" width={500} height={300} />
          <Image src="/images/expenses-chart.png" alt="Expenses Chart" width={500} height={300} />
          <Image src="/images/deductions-chart.png" alt="Deductions Chart" width={500} height={300} />
          <Image src="/images/deductions-chart.png" alt="Deductions Chart" width={500} height={300} />
      </section>

      <footer className="footer">
        <p>Discover how TaxView can revolutionize your approach to fraud detection and tax analysis. <a href="/contact">Contact us</a> to learn more!</p>
      </footer>
    </div>
  );
}
