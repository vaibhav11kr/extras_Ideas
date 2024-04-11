import React, { useEffect, useState } from "react";
import InputUi from "./InputUi";

const FetchMessage = () => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${value}`
    );
    const data = await res.json();
    setData(data);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div className="bg-[#383838] text-white p-4 w-screen h-screen items-center flex flex-col">
      <InputUi
        value={value}
        handleSubmit={handleSubmit}
        data={data}
        handleChange={handleChange}
      />
    </div>
  );
};

export default FetchMessage;
