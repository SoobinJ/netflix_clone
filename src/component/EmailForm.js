import React, { useState } from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";

function EmailForm(){
    const [value, setValue]=useState('');

    const handleChange=(event)=>{
        setValue(event.target.value);
    }

    const handleSubmit=(event)=>{
        alert('입력한 이메일:'+value);
        event.preventDefault();
    }

    const handleClick=()=>{
        return(
            <Link to="/Login"></Link>
        )
        document.location.href('/Login')
    }

    return(
        <form onSubmit={handleSubmit} class="email">
            <h3 class="email-title">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
            <div class="email-form" onFocus={focusStyle} onBlur={blurStyle}>
                <label for="input_id" class="kd" onFocus={focusStyle} onBlur={blurStyle}>
                    <input type="email" onBlur={blurStyle} onFocus={focusStyle} value={value} onChange={handleChange} class="email-input"/>
                    <label for="id_email" class="placeLabel">이메일 주소</label>
                </label>
                <Link to='./Login'>
                    <button type="submit" class="red-btn" onClick={handleClick}>
                        <span>시작하기</span>
                    </button>
                </Link>
            </div>
        </form>
    )
}

function focusStyle(e){
    e.target.nextElementSibling.classList.add('emailfocus');
    e.target.nextElementSibling.classList.remove('placeLabel');
}
function blurStyle(e){
    e.target.nextElementSibling.classList.add('placeLabel');
    e.target.nextElementSibling.classList.remove('emailfocus');
}
export default EmailForm;