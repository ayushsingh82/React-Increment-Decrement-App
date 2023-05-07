import React, { useState } from "react";
import ReactDOM from 'react-dom'
// import RemoveIcon from '@mui/icons-material/Remove';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ToDoList=()=>{
    const [num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    };

    const decNum=()=>{
        if(num>0){
        setNum(num-1);
        }else{
            alert('sorry,zero limit reached');
            setNum(0);
        }
    };
    return (
        <div className="main_div">
            <div className="center_div">
            <h1>{num}</h1>
            <div className="btn_div">
                <button onClick={incNum}>
                <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button onClick={decNum}>
              <FontAwesomeIcon icon={faMinus} />
              {/* <RemoveIcon/> */}
                </button>
            </div>

            </div>
        </div>
    )
}
export default ToDoList;