import React from 'react';

interface Data {
    [key: string]: string | number | boolean;
}

interface CSVUploadProps {
    onDataReceived: (data: Data) => void;
}

const CSVUpload: React.FC<CSVUploadProps> = ({ onDataReceived }) => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const data = JSON.parse(reader.result as string);
            onDataReceived(data); // Send the data to the parent component
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
    );
};

export default CSVUpload;
