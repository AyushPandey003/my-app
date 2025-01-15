"use client";
import { useState, useEffect } from "react";

export default function AdvancedTaxCalculator() {
  const [incomeSources, setIncomeSources] = useState([{ id: 1, amount: 0 }]);
  const [deductions, setDeductions] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [taxSlabs, setTaxSlabs] = useState<TaxSlab[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  interface TaxSlab {
    lowerLimit: number;
    upperLimit: number | null;
    rate: number;
  }

  // Fetch tax slabs from API
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

  // Calculate tax
  const calculateTax = () => {
    if (!taxSlabs.length) return;

    const totalIncome = incomeSources.reduce((sum, source) => sum + source.amount, 0);
    const taxableIncome = totalIncome - deductions;
    let tax = 0;

    let remainingIncome = taxableIncome;
    for (const slab of taxSlabs) {
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

  const addIncomeSource = () => {
    setIncomeSources([...incomeSources, { id: incomeSources.length + 1, amount: 0 }]);
  };

  interface IncomeSource {
    id: number;
    amount: number;
  }

  const updateIncomeSource = (id: number, amount: number) => {
    setIncomeSources(
      incomeSources.map((source: IncomeSource) => (source.id === id ? { ...source, amount } : source))
    );
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Advanced Tax Calculator</h2>

      {/* Income Sources */}
      {incomeSources.map((source) => (
        <div key={source.id} className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Income Source {source.id}
          </label>
          <input
            type="number"
            value={source.amount}
            onChange={(e) => updateIncomeSource(source.id, Number(e.target.value))}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter income amount"
          />
        </div>
      ))}

      <button
        onClick={addIncomeSource}
        className="mb-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Add Income Source
      </button>

      {/* Deductions */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Deductions</label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(Number(e.target.value))}
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter deductions"
        />
      </div>

      {/* Currency Selector */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateTax}
        className="mt-4 py-3 px-6 w-full bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
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
          Estimated Tax ({currency}): {taxAmount.toFixed(2)}
        </div>
      )}
    </div>
  );
}
