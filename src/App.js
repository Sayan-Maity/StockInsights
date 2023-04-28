import React, { useState } from 'react';
import Dropdown, { checkedHandle } from './Dropdown';
import { FaTimesCircle } from 'react-icons/fa';
import { BsArrowUpRight, BsSearch } from 'react-icons/bs';
import './App.css'


const App = () => {
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [dropdownName, setDropdownName] = useState('')
  const data = [
    "Q2 FY23",
    "Q1 FY23",
    "Q4 FY22",
    "Q3 FY21",
    "Q2 FY22",
  ]
  const data2 = [
    "OLECTRA",
    "TATAMOTORS",
    "ASHOKLEY",
    "JMBA",
    "EICHERMOT",
    "LNT",
    "BRITANNIA",
  ]

  const [bodyLinks, setBodyLinks] = useState([
    {
      link: "www.google.com",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum itaque facilis perferendis iusto, saepe vero officia ratione! Officiis ullam beatae dolore rem voluptate optio similique? Voluptatem, aliquam in."
    },
    {
      link: "www.google.com",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum itaque facilis perferendis iusto, saepe vero officia ratione! Officiis ullam beatae dolore rem voluptate optio similique? Voluptatem, aliquam in."
    },
    {
      link: "www.google.com",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum itaque facilis perferendis iusto, saepe vero officia ratione! Officiis ullam beatae dolore rem voluptate optio similique? Voluptatem, aliquam in."
    },
  ])

  



  return (
    <div className='main'>
      <div className="leftPart">
        <h1>Navbar</h1>
      </div>
      <div className="rightPart">
        <div className="header">
          <h1>Welcome !</h1>
          <p>You can ask questions to search through Earnings Calls transcripts of Public companies !</p>
        </div>
        <div className="dropdowns">
          <label >Search Within: </label>
          <div className="">
            <Dropdown menuItems={data} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} dropdownName="Selected Time"/>
          </div>
          <div className="">
            <Dropdown menuItems={data2} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} dropdownName="Selected Stocks"/>
          </div>
        </div>
        <div className="searchbar">
          <div className="innerSearchbar">
            <p><BsSearch/></p>
            <input type="text" className='searchinput' placeholder='Enter any question here ...'/>
          </div>
        </div>

        <div className="tags">
          {selectedMenu.map((item) => {
            return (
              <div className='eachTag'>
                <p>{item}</p>
                <p onClick={() => checkedHandle(item, selectedMenu, setSelectedMenu)}><FaTimesCircle className='times'/></p>
              </div>
              
            )
          })}
        </div>

        <div className="bodyLinks">
          <h3>Latest Earnings Call Transcripts</h3>
          <div className="mainBodyLinks">
            {bodyLinks.map((items) => {
              return (
                <div className='eachBodyLink'>
                  <div className="linkHeading">
                    <a href={items.link} target='_blank' rel="noreferrer">{items.link} <BsArrowUpRight/></a>
                    <div className="linkButton">View Insights</div>
                  </div>
                  <div className="linkDesc">{items.desc}</div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      

    </div>
  );
};

export default App;
