import React from "react";
import {HiOutlineStar, HiStar} from "react-icons/hi2";

const CurrencyDropdown = ({
  currencies,
  title,
  currency,
  setCurrency,
  favorites,
  handleFavourite,
}) => {

    const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div className="relative">
      <label htmlFor={title} className="mr-3 block  text-sm font-medium mb-2 ">
        {title}
      </label>
      <select
        name="dropdown"
        id={title}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {favorites.map((currency) => {
            return (
              <option className="bg-gray-200" value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
          <hr />
        {currencies
            .filter((c) => !favorites.includes(c)).map((currency) => {
          return (
            <option value={currency} key={currency} className="bg-gray-200 h-8">
              {currency}{" "}
            </option>
          );
        })}
      </select>
      <button
          onClick={() => handleFavourite(currency)}
          className="absolute inset-y-0  right-0 pr-5 items-center mt-7 flex text-sm leading-5"
        >
          {isFavorite(currency) ? <HiStar className="text-black"/> : <HiOutlineStar className="text-black"/>}
        </button>
    </div>
  );
};

export default CurrencyDropdown;
