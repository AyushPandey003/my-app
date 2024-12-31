import React from 'react';
import Chart from 'react-apexcharts';

interface ReportData {
    income: number;
    expenses: number;
    deductions: number;
    zscore: number;
    deduction_change: number;
}

interface ReportsProps {
    data: ReportData[];
}

const Reports: React.FC<ReportsProps> = ({ data }) => {
    // Define chart type and horizontal alignment as constants
    const chartType = 'line' as const;
    const horizontalAlign = 'center' as const;

    // Prepare chart data based on the response
    const chartData = {
        series: [
            {
                name: 'Income',
                data: data.map((item) => item.income),
            },
            {
                name: 'Expenses',
                data: data.map((item) => item.expenses),
            },
            {
                name: 'Deductions',
                data: data.map((item) => item.deductions),
            },
            {
                name: 'Z-Score',
                data: data.map((item) => item.zscore),
            },
            {
                name: 'Deduction Change',
                data: data.map((item) => item.deduction_change),
            },
        ],
        options: {
            chart: {
                type: chartType,
                height: 350,
            },
            title: {
                text: 'Financial Analysis',
                align: horizontalAlign,
                style: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                },
            },
            xaxis: {
                categories: data.map((_, index) => `Record ${index + 1}`),
                title: {
                    text: 'Record Index',
                },
            },
            yaxis: {
                title: {
                    text: 'Value',
                },
                tooltip: {
                    enabled: true,
                },
            },
            legend: {
                horizontalAlign: horizontalAlign,
                floating: true,
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
        },
    };

    return (
        <div>
            <h2>Financial Report</h2>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type={chartType}
                height={350}
            />
        </div>
    );
};

export default Reports;
