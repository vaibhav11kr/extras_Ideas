import React, { useState } from "react";

const Itemswap = () => {
  const [item1, setItem1] = useState([
    { title: "Item 1", checked: false },
    { title: "Item 2", checked: false },
    { title: "Item 3", checked: false },
    { title: "Item 4", checked: false },
    { title: "Item 5", checked: false },
    { title: "Item 6", checked: false },
  ]);
  const [item2, setItem2] = useState([
    { title: "Item A" },
    { title: "Item B" },
    { title: "Item C" },
    { title: "Item D" },
    { title: "Item E" },
    { title: "Item F" },
  ]);

  const handleClick = (idx) => {
    const updateList1 = [...item1];
    updateList1[idx].checked = !updateList1[idx].checked;
    setItem1(updateList1);
  };

const handleSwap = () =>{
    const updateList1 = [...item1];
    const updateList2 = [...item2];
    updateList1.forEach((item, idx)=>{
        if(item.checked){
            const temp = updateList1[idx].title;
            updateList1[idx].title = updateList2[idx].title;
            updateList2[idx].title = temp;
        updateList1[idx].checked = !updateList1[idx].checked;

        }
        setItem1(updateList1);
        setItem2(updateList2);
    });
};

  return (
    <div className="bg-[#383838] h-screen w-screen text-white flex flex-col p-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-2xl">First List</h1>
        <ul>
          {item1.map((item, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onClick={() => handleClick(idx)}
                />
                &nbsp;
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl">Second List</h1>
        <ul>
          {item2.map((item, idx) => (
            <li key={idx}>{'=>'} {item.title}</li>
          ))}
        </ul>
      </div>

      <button type="submit" className="self-start mt-10 bg-white text-black p-2 rounded-md hover:bg-blue-400 hover:text-white" onClick={handleSwap}> Swap the items</button>
    </div>
  );
};

export default Itemswap;
