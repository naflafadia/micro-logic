/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const CurrencyConvert = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [reset, setReset] = useState(false);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert("Enter a valid amount");
    } else {
      const conversionRate = getConversionRate(fromCurrency, toCurrency);
      const result = (amount * conversionRate).toLocaleString(undefined, {
        style: "currency",
        currency: toCurrency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setConvertedAmount(result);
      setReset(true);
    }
  };

  const handleReset = () => {
    setAmount("");
    setFromCurrency("USD");
    setToCurrency("USD");
    setConvertedAmount("");
    setReset(false);
  };

  const getConversionRate = (from, to) => {
    // Dummy conversion rates for illustration purposes
    const conversionRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.74,
        IDR: 14200,
      },
      EUR: {
        USD: 1.18,
        GBP: 0.88,
        IDR: 17100,
      },
      GBP: {
        USD: 1.35,
        EUR: 1.13,
        IDR: 19400,
      },
      IDR: {
        USD: 0.0000704,
        EUR: 0.0000585,
        GBP: 0.0000515,
      },
    };

    return conversionRates[from][to];
  };

  return (
    <>
      <Navbar />
      <ButtonHome to="/" />
      <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
          <div className="p-5">
            <h1 className="font-semibold text-xl text-center mb-6">Currency Converter</h1>
            <div className="flex gap-3 justify-center">
              <input
                type="number"
                className="bg-slate-200 w-36 rounded-md"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="IDR">IDR</option>
              </select>
              <h2>TO</h2>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="IDR">IDR</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm"
                onClick={handleConvert}
              >
                Convert
              </button>
              {reset && (
                <button
                  className="bg-slate-600 font-semibold text-white p-2 rounded-md hover-bg-slate-500 text-sm ml-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              )}
            </div>
            <div className="flex flex-col items-center mt-4">
              <h4>Try output :</h4>
              <textarea
                value={convertedAmount}
                className="bg-slate-200 w-64 rounded-md mt-2"
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvert;





