
# TaxView - Digital Forensics Web App

**TaxView** is a digital forensics web app designed to monitor fraudulent tax cases. It provides a comprehensive dashboard, role-based authentication, and a tax calculator tool with chart analysis. This app utilizes Next.js for the frontend and MongoDB for database management. It also integrates a fraud detection API to analyze financial data from CSV files and visualize results in beautiful charts.

## Features
- **User Authentication**: Role-based authentication with secure login.
- **Fraud Detection**: Analyze financial records using anomaly detection and rule violation algorithms.
- **Financial Reports**: Visualize financial data and anomalies in intuitive charts.
- **File Upload**: Upload CSV files for analysis, with clear instructions on the required format.
- **Interactive Dashboard**: A dashboard displaying key metrics and insights into tax-related data.

## Tech Stack
- **Frontend**: Next.js, React, ApexCharts
- **Backend**: FastAPI (for fraud detection)
- **Database**: MongoDB
- **Hosting**: Hugging Face Spaces (for API hosting)

## Getting Started

### Prerequisites
- Node.js
- MongoDB (for database setup)
- Python (for FastAPI backend)

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/AyushPandey003/my-app.git
cd taxview
```

### 2. Install Frontend Dependencies
Navigate to the frontend directory and install the required dependencies:
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies
For the backend, install the necessary dependencies for FastAPI:
```bash
cd backend
pip install -r requirements.txt
```

### 4. Set Up MongoDB
- Create a MongoDB database for your app and configure the connection string in the backend's `.env` file.
- If using a local MongoDB instance, ensure MongoDB is running.

### 5. Start the FastAPI Server
Navigate to the `backend` directory and run the FastAPI server:
```bash
cd backend
uvicorn main:app --reload
```

### 6. Start the Frontend
Navigate to the `frontend` directory and start the Next.js development server:
```bash
cd frontend
npm run dev
```
Your app will now be running at `http://localhost:3000`.

## API Usage
The backend FastAPI server provides an endpoint for analyzing CSV files. You can upload CSV files containing financial data, and the server will return an analysis of anomalies and rule violations.

### File Format
The CSV file should have the following columns:
- `income`
- `expenses`
- `deductions`

Example:
```csv
income,expenses,deductions
45000,48000,1500
49376,50445,3357
22261,58379,2987
```

### Endpoint: `/analyze`
- **Method**: `POST`
- **Request**: A CSV file with `income`, `expenses`, and `deductions` columns.
- **Response**: A JSON object with anomalies and rule violations.

Example response:
```json
{
  "anomalies": [
    {
      "income": 45000,
      "expenses": 48000,
      "deductions": 1500,
      "zscore": -2.1558996327205056,
      "deduction_change": 0.0
    }
  ],
  "violations": [
    {
      "income": 22261,
      "expenses": 58379,
      "deductions": 2987
    }
  ]
}
```

### Visualizing Data
Once the data is received, the frontend uses **ApexCharts** to plot beautiful and interactive line charts based on the financial records, including:
- `Income`
- `Expenses`
- `Deductions`
- `Z-Score`
- `Deduction Change`

## Deployment

### Deploying FastAPI Backend
1. **Dockerize** the FastAPI backend and deploy it on a cloud provider (e.g., AWS, GCP, DigitalOcean).
2. **Hugging Face Spaces** is currently being used for hosting the backend for analysis (`https://ayush-003-taxview.hf.space/analyze`).

### Deploying Frontend
Deploy the frontend using a service like Vercel, Netlify, or AWS Amplify.

### Environment Variables
In both frontend and backend, you will need to set up environment variables for database credentials and API URLs.

Example `.env` for FastAPI:
```env
MONGODB_URI="your_mongo_connection_string"
GOOGLE_CLIENT_SECRET=""
```

## Contributing
Feel free to fork the repo and submit pull requests. Contributions are welcome!

### Steps to contribute:
1. Fork the repository.
2. Clone your fork and create a new branch.
3. Make your changes and commit them.
4. Push to your fork and open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
