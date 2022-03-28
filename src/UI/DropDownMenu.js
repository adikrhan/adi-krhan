import React, { useState } from "react";

import classes from "./DropDownMenu.module.css";
import { FaCaretDown } from "react-icons/fa";

const DropDownMenu = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const listItemClickHandler = (item) => {
    console.log(item);
    props.onListItemClick(item);
    setShowDropDown(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.selected} onClick={toggleDropDown}>
        {props.selectedItem} <FaCaretDown />
      </div>
      {showDropDown && (
        <div className={classes["list-container"]}>
          <ul>
            {props.items.map((item) => {
              return (
                <li 
                  key={item} 
                  onClick={() => listItemClickHandler(item)}
                  className={`${props.selectedItem === item ? classes.active : ''}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
