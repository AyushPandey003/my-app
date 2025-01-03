"use client";

import dynamic from "next/dynamic";

// Dynamically import the Chart component with ssr: false
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const data = [
  {
    anomalies: [],
    violations: [
      {
        income: 50998,
        expenses: 82445,
        deductions: 4357,
        zscore: 1.1800496879910825,
        deduction_change: 0.0,
      },
      {
        income: 11902,
        expenses: 34939,
        deductions: 3379,
        zscore: 0.038097137884000515,
        deduction_change: 0.0,
      },
      {
        income: 52568,
        expenses: 67726,
        deductions: 2509,
        zscore: -0.9777502226407043,
        deduction_change: 0.0,
      },
      {
        income: 38216,
        expenses: 55882,
        deductions: 2140,
        zscore: -1.408609620380493,
        deduction_change: 0.0,
      },
      {
        income: 71953,
        expenses: 84934,
        deductions: 3753,
        zscore: 0.47479473884519546,
        deduction_change: 0.0,
      },
      {
        income: 17033,
        expenses: 47454,
        deductions: 3987,
        zscore: 0.7480226496070126,
        deduction_change: 0.0,
      },
      {
        income: 80823,
        expenses: 94376,
        deductions: 3197,
        zscore: -0.17441345937519062,
        deduction_change: 0.0,
      },
    ],
  },
];

const Reports: React.FC = () => {
  const chartType = 'line' as const;
  const horizontalAlign = 'center' as const;

  return (
    <div>
      <h2>Financial Report</h2>
      <Chart
        options={{
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
        }}
        series={[
          {
            name: 'Income',
            data: data.flatMap((item) => item.violations.map((v) => v.income)),
          },
          {
            name: 'Expenses',
            data: data.flatMap((item) => item.violations.map((v) => v.expenses)),
          },
          {
            name: 'Deductions',
            data: data.flatMap((item) => item.violations.map((v) => v.deductions)),
          },
          {
            name: 'Z-Score',
            data: data.flatMap((item) => item.violations.map((v) => v.zscore)),
          },
          {
            name: 'Deduction Change',
            data: data.flatMap((item) => item.violations.map((v) => v.deduction_change)),
          },
        ]}
        type={chartType}
        height={350}
      />
    </div>
  );
};

export default Reports;
