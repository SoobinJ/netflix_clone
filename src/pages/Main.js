import React, { useEffect, useState, useRef } from 'react';
import MainView from '../component/MainView';
import TabMenu from '../component/TabMenu';
import FooterItem from '../component/FooterLink';
import FooterText from "../component/FooterText";
import './Main.css'
import SocialLink from '../component/SocialLink';
import { accountState } from '../recoil/Account';
import { popupState } from '../recoil/Popup';
import { scrollState } from '../recoil/Scroll';
import { useRecoilValue } from 'recoil';
import profiles from "../db/profiles.json";
import Preview from '../component/Preview';

function Main(){
    const [ScrollY, setScrollY]=useState(0);
    const[scrollActive, setScrollActive]=useState(false);
    const account=useRecoilValue(accountState);
    const popup=useRecoilValue(popupState);
    const scroll=useRecoilValue(scrollState);

    function handleScroll() { 
        if(ScrollY > 10) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }

    useEffect(()=>{
        function scrollListener(){
            window.addEventListener("scroll",handleScroll);
        } //window에서 스크롤을 감시 시작
        scrollListener(); //window에서 스크롤을 감시
        return()=>{ //window 에서 스크롤 감시 종료
            window.removeEventListener("scroll",handleScroll);
        }
    })

    return(
        <div class='main'>
            <div style={popup?{width:"100%"}:{
                position:"fixed",
                width:"100%",
                top:-scroll
            }}>
                <div class='main-header'>
                    <div class="menu" className={scrollActive?"menu fixed":"menu"}>
                        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" class='mainlogo'/>
                        <TabMenu></TabMenu>
                        <div class='right'>
                            <div class='nav-elemnet'>
                                <div class='searchBox'>
                                    <button class='search'>
                                        <svg class='search-icon' xmlns="http://www.w3.org/2000/svg">
                                            <path d='M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z'></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class='nav-elemnet'>
                                <a href='' class="navkid">키즈</a>
                            </div>
                            <div class='nav-elemnet'>
                                <span class='noti'>
                                    <button class='noti-menu'>
                                        <svg class='noti-icon'>
                                            <path d='M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z'></path>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div class='nav-elemnet'>
                                <div class='account-menu'>
                                    <div class='account-btn'>
                                        <a href='/'>
                                            <span class='profile-link'>
                                                {
                                                    profiles
                                                    .filter((p)=>p.name===account)
                                                    .map((p)=>(
                                                        <img class='profile-img' src={p.url}></img>
                                                    ))
                                                }                         
                                            </span>
                                        </a>
                                        <span class='caret'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='MainView'>
                    <MainView></MainView>
                </div>

                <footer>
                    <div class="social-links">
                        <SocialLink name="facebook"></SocialLink>
                        <SocialLink name="instagram"></SocialLink>
                        <SocialLink name="twitter"></SocialLink>
                        <SocialLink name="youtube"></SocialLink>
                    </div>
                    <ul class="footer-links">
                        <FooterItem name="main"></FooterItem>
                    </ul>
                    <div class="footer-service">
                        <button class="service-code">서비스코드</button>
                    </div>
                    <div class="copy-text">
                        <FooterText></FooterText>
                        <span>8f57aa84-cb92-4560-b0de-3f9dada25866</span>

                    </div>

                </footer>
            </div>


            {popup?"":<Preview/>}

            <div style={popup?{display:"none"}:{
                tabindex:"-1",
                opacity:"0.7"
            }}>
                <div style={{
                    backgroundColor:"#000",
                    height:"100%",
                    left:"0",
                    position:"fixed",
                    top:"0",
                    width:"100%"
                }}></div>                                
            </div>                                    
        </div>
    )
}

export default Main;