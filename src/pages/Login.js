import React from "react";
import FooterItem from "../component/FooterLink";
import FooterText from "../component/FooterText";
import LangSelect from "../component/LangSelect";
import './Login.css';
import LoginForm from "../component/LoginForm";
import {Link } from 'react-router-dom';

function Login(){
    return(
        <div class="login-wrapper">
            <div class="loginBackground">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/9919b42b-9d37-4726-ab59-1df43235c4f1/KR-ko-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="backimg"/>
            </div>

            <div class="login-header">
                <Link to="/"><img src="https://i.ibb.co/r5krrdz/logo.png"/></Link>
            </div>

            <div class="login-body">
                <div class="login-content">
                    <div class="login-main">
                        <h1>로그인</h1>
                        <LoginForm></LoginForm>
                    </div>
                    <div class="login-other">
                        <div class="signup">
                            Netflix 회원이 아닌가요?
                            <a href="/index.html">지금 가입하세요.</a>
                        </div>
                        <div class="recaptcha">
                            <p>
                                <span>
                                    이 페이지는 Google reCAPTCHA의 보호를 받아<br/> 사용자가 로봇이 아님을 확인합니다.
                                </span>
                                <button class="recaptcha-btn">자세히 알아보기</button>
                            </p>
                            <div class="recaptcha hidden">
                                <span>
                                    Google reCAPTCHA가 수집하는 정보에는 Google<br/>
                                    <a href="https://policies.google.com/privacy" target="_blank">개인정보처리방침</a>
                                    과
                                    <a href="https://policies.google.com/terms">서비스 약관</a>
                                    이 적용되며, 해당 정보는 reCAPTCHA가 서비스를 제고, 관리 및 개선과 일반적인 보안 유지에 사용됩니다.(Google의 개인 맞춤 광고에 사용 안
                                    함).
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="loginFooter">
                <div class="footer-wrapper">
                    <p class="footer-top">
                        질문이 있으신가요? 문의 전화: &nbsp;
                        <a class="footer-top-a" href="tel:080-000-0000">080-001-9587</a>
                    </p>
                    <ul class="footer-links">
                        <FooterItem name="login"></FooterItem>
                    </ul>

                    <LangSelect></LangSelect>
                    <div class="copy-text">
                        <FooterText></FooterText>
                    </div>
                </div>
            </footer>
    </div>
    );
}

export default Login;