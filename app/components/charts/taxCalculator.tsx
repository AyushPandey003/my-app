"use client";
import { useState, useEffect } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  interface TaxSlab {
    lowerLimit: number;
    upperLimit: number | null;
    rate: number;
  }

  const [taxSlabs, setTaxSlabs] = useState<TaxSlab[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch tax slabs from MongoDB
  useEffect(() => {
    const fetchTaxSlabs = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/taxSlabs");
        const data = await response.json();
        if (data.success) {
          setTaxSlabs(data.slabs);
        } else {
          setError("Failed to fetch tax slabs.");
        }
      } catch {
        setError("Error fetching tax slabs.");
      } finally {
        setLoading(false);
      }
    };

    fetchTaxSlabs();
  }, []);

  // Tax calculation logic
  const calculateTax = () => {
    if (!taxSlabs.length) return;

    const taxableIncome = income - deductions;
    let tax = 0;

    // Calculate tax based on dynamic slabs
    let remainingIncome = taxableIncome;
    for (let i = 0; i < taxSlabs.length; i++) {
      const slab = taxSlabs[i];
      if (remainingIncome > slab.lowerLimit) {
        const taxableInRange =
          slab.upperLimit === null
            ? remainingIncome - slab.lowerLimit
            : Math.min(remainingIncome, slab.upperLimit) - slab.lowerLimit;

        tax += taxableInRange * slab.rate;
        remainingIncome -= taxableInRange;
      } else {
        break;
      }
    }

    setTaxAmount(tax);
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg max-w-lg mx-auto ">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Tax Calculator</h2>

      {/* Income Input */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your income"
        />
      </div>

      {/* Deductions Input */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Deductions</label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(Number(e.target.value))}
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your deductions"
        />
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateTax}
        className="mt-4 py-3 px-6 w-full bg-indigo-600 text-white rounded-lg focus:outline-none hover:bg-indigo-700"
        disabled={loading || !taxSlabs.length}
      >
        {loading ? "Loading..." : "Calculate Tax"}
      </button>

      {/* Error and Tax Result */}
      {error && (
        <div className="mt-4 text-sm text-red-600 text-center">
          {error}
        </div>
      )}

      {taxAmount > 0 && (
        <div className="mt-6 text-lg font-semibold text-indigo-600 text-center">
          Estimated Tax: ${taxAmount.toFixed(2)}
        </div>
      )}
    </div>
  );
}
