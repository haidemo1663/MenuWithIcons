import React, { Component } from "react";
import {
    AiOutlineHome,
    AiOutlineGift,
    AiOutlineCloudUpload,
    AiOutlineCoffee,
    AiOutlineSetting
} from "react-icons/ai";
import "./typeFile.css";
class MenuWithIcons extends Component {
  render() {
    const nameClass="icons-list";
    return (
      <div className="todolistIcons">
          <div className={nameClass+" "+"active"}>
             <p> <AiOutlineHome className='icons'></AiOutlineHome><br/>
                 HOME</p>
          </div>
          <div className={nameClass}>
           <p> <AiOutlineGift className='icons'></AiOutlineGift><br/>
            DEALS</p>
          </div>
          <div className={nameClass}>
             <p> <AiOutlineCloudUpload className='icons'></AiOutlineCloudUpload><br/>
                 UPLOAD</p>
          </div>
          <div className={nameClass}>
             <p> <AiOutlineCoffee className='icons'></AiOutlineCoffee><br/>
                 WORK</p>
          </div>
          <div className={nameClass}>
             <p> <AiOutlineSetting className='icons'></AiOutlineSetting><br/>
                 SETTING</p>
          </div>
      </div>
    );
  }
}
export default MenuWithIcons;
