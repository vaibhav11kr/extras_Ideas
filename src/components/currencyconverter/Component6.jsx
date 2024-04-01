import React, { useEffect } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import CurrencyDropdown from "./CurrencyDropdown";
import { useState } from "react";

const Component6 = () => {
    const [currency, setCurrency] = useState([]);
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [converting, setConverting] = useState(false);
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || ["INR", "USD"]
      );
  // Currencies -> https://api.frankfurter.app/currencies
  // Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json()
            setCurrency(Object.keys(data));
        } catch (error) {
            console.log("Error fetching Currencies :", error);
        } 
    };
    useEffect (()=>{
        fetchCurrencies();
    }, [])
    const convertCurrency = async()=>{
        if(!amount) return;
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json()
            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
        } catch (error) {
            console.log("Error fetching Currencies :", error);
        }finally{
            setConverting(true);
        }
    }
    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
      };
    const handleFavourite = (currency)=>{
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
        updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
      } else {
        updatedFavorites.push(currency);
      }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  return (
    <div className="bg-gray-400 h-screen w-screen flex flex-col items-center justify-center">
      <div className="container bg-slate-600 flex flex-col max-w-xl rounded-lg shadow-md p-5 font-serif text-white m-5">
        <h2 className="text-2xl font-semibold mb-4">Currency Converter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <CurrencyDropdown 
          currencies={currency}
          title = "From:"
          currency = {fromCurrency}
          setCurrency = {setFromCurrency}
          favorites={favorites}
          handleFavourite={handleFavourite}
          />
          <div className="flex justify-center -mb-1 sm:mb-0">
            <button className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <FaArrowRightArrowLeft className="text-xl text-gray-700" onClick={swapCurrencies}/>
            </button>
          </div>
          <CurrencyDropdown 
          currencies={currency}
          title = "To:"
          currency = {toCurrency}
          setCurrency = {setToCurrency}
          favorites={favorites}
          handleFavourite = {handleFavourite}
          />
        </div>
        <div className="self-start w-full ">
          <label htmlFor="amount1" className="block text-base font-medium mr-5 mb-2 mt-4">
            Amount:
          </label>
          <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          id="amount1"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1 text-black font-sans"
          placeholder="Enter the amount"
        />
        </div>
        <div className="flex self-start sm:self-end">
          <button
            onClick={convertCurrency}
            className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5 ${converting ? "animate-bounce" : ""}` } 
          >
            Convert
          </button>
        </div>
        {convertedAmount && (<div className="mt-4 text-lg font-medium self-start sm:self-end text-green-600 font-mono flex ">
          Converter Amount: <p className="animate-pulse">{convertedAmount}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Component6;
