import React, { useState } from "react";

function LangSelect(){
    const[value, setValue]=useState('ko');

    const handleChange=(event)=>{
        setValue(event.target.value);
    }

    return(
        <div class="lang-group">
            <select name="lang" id="sel-lang" value={value} onChange={handleChange}>
                <option value="ko">한국어</option>
                <option value="en">English</option>
            </select>
        </div>
    )
}

export default LangSelect;