import React, { useEffect, useState } from "react";
import {Link } from 'react-router-dom';

function LoginForm(){

    const [email, setEmail]=useState('');
    const [pw,setPw]=useState('');

    const [emailValid,setEmailValid]=useState(false);
    const [pwVaild,setpwValid]=useState(false);

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        
        const regex=
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

            if(regex.test(email)){
            setEmailValid(true);
            e.target.classList.remove('fielderror');
        }else{
            setEmailValid(false);
            e.target.classList.add('fielderror');
        }
    }

    const handleField=(e)=>{
        const targetNext=e.target.nextElementSibling;
        const target=e.target;
        targetNext.classList.remove('placelabel1');
        targetNext.classList.add('focus');

        target.classList.add('fieldfocus');
        
    }

    const handleFieldOut=(e)=>{
        const t=e.target.nextElementSibling;
        const target=e.target;
        if(e.target.value.length==0){
            t.classList.add('placelabel1');
            t.classList.remove('focus');
        }
        target.classList.remove('fieldfocus');
    }

    const handlePassword=(e)=>{
        setPw(e.target.value);
        const regex=
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)){
            setpwValid(true);
            e.target.classList.remove('fielderror');
        }else{
            setpwValid(false);
            e.target.classList.add('fielderror');
        }
    }


    return(
        <form action="" class="login-form">
            <div class="login-container login-id">
                <div class="inputplace">
                    <label class="input_id">
                        <input 
                            class="login-field idField" 
                            type="text"
                            value={email}
                            onFocus={handleField}
                            onBlur={handleFieldOut}
                            onChange={handleEmail}/>
                        <label class="placelabel1">이메일 주소 또는 전화번호</label>
                    </label>
                </div>
                <div class="errormessage">
                    {!emailValid&&email.length>0&&(
                        <div>정확한 이메일 주소를 입력하세요.</div>
                    )}

                    </div>
            </div>
            <div class="login-container login-pw">
                <div class="inputplace">
                    <label class="input_id">
                        <input 
                            class="login-field pwField" 
                            type="text"
                            value={pw}
                            onFocus={handleField}
                            onBlur={handleFieldOut}
                            onChange={handlePassword}/>
                        <label class="placelabel1">비밀번호</label>
                    </label>
                </div>
                <div class="errormessage">
                    {!pwVaild&&pw.length>0&&(
                        <div>비밀번호는 4~60자 사이여야 합니다.</div>
                    )}
                </div>
            </div>
            
            <Link to="/User" class="logintouser">
                <button class="login-btn">
                    로그인
                </button>
            </Link>
            
            <div class="login-help">
                <div class="login-remember">
                    <input type="checkbox"/>
                    <label for="rememberme">
                        <span class="login-remember-text">로그인 정보 저장</span>
                    </label>
                </div>
                <a class="help" href="#">도움이 필요하신가요?</a>
            </div>
        </form>
    )
}

export default LoginForm;