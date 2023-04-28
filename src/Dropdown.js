import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

export const checkedHandle = (str, selectedMenu, setSelectedMenu) => {
  if (selectedMenu.includes(str)) {
    let temp = selectedMenu.filter((item) => item !== str);
    setSelectedMenu(temp);
    console.log(temp);
  } else setSelectedMenu([...selectedMenu, str]);
};

const Dropdown = ({ menuItems, selectedMenu, setSelectedMenu, dropdownName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  console.log(selectedMenu);

  return (
    <>
      <button onClick={handleDropdown}>{dropdownName} <AiOutlineDown/></button>

<div className="xxxx">

      {showDropdown &&
        menuItems.map((item) => {
          return (
            <div className='menuItems'>
              <input
                type="checkbox"
                value={item}
                checked={selectedMenu.includes(item.toString()) ? true : false}
                onClick={(e) => checkedHandle(e.target.value, selectedMenu, setSelectedMenu)}
              />
              <p>{item}</p>
            </div>
          );
        })}
        </div>



        {/* {showDropdown && <div id="name-dropdown"  >
          <div >Alice <input type="checkbox" value="Alice" checked={selectedMenu.includes("Alice")? true : false} onClick={(e) => checkedHandle(e.target.value)}/></div>
          <div >Bob <input type="checkbox" value="Bob" checked={selectedMenu.includes("Bob")? true : false} onClick={(e) => checkedHandle(e.target.value)}/></div>
          </div>}  */}
    </>
  );
};

export default Dropdown;
