import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import List_item from '../component/ListItem';
import FooterItem from '../component/FooterLink';
import EmailForm from '../component/EmailForm';
import FooterText from '../component/FooterText';
import LangSelect from '../component/LangSelect';

function Start() {
    return (
    <div>
        <header>
            <div class="menu-group">
                <div class="logo">
                    <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
                </div>
                <LangSelect></LangSelect>
                <Link to="/Login" class='login'>로그인</Link>

            </div>
        </header>

    <section class="contents">

        <div class="start">
            <div class="background">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/9919b42b-9d37-4726-ab59-1df43235c4f1/KR-ko-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="backimg"/>
                <div class="img-gradient">
                </div>
            </div>
            <div class="text_box">
                <h1 class="title">영화와 시리즈를 <br/> 무제한으로.</h1>
                <h2 class="subtitle">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                <EmailForm></EmailForm>
            </div>
        </div>

        <div class="feature">
            <div class="watch">
                <div class="f_container">
                    <div class="f_text w_text">
                        <h1>TV로 즐기세요.</h1>
                        <h2>스마트 TV, PlayStation, Xbox, Chromecast,<br/>
                            Apple TV, 블루레이 플레이어 등 다양한 <br/>디바이스에서 시청하세요.</h2>
                    </div>
                    <div class="f_img">
                        <div class="img_container">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                                alt="tvimg" class="tvimg"/>
                            <div class="video_container">
                                <video autoplay playsinline muted loop
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="download watch">
                <div class="f_container">
                    <div class="f_img">
                        <div class="dimg_container">
                            <img class="downimg"
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                                alt=""/>
                            <div class="ani_container">
                                <div class="ani_img_box">
                                    <img class="aniimg"
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                        alt=""/>
                                </div>
                                <div class="ani_text_box">
                                    <div class="text_1">기묘한 이야기</div>
                                    <div class="text_2">저장 중...</div>
                                </div>
                                <div class="ani_save"></div>
                            </div>
                        </div>
                    </div>
                    <div class="f_text d_text">
                        <h1>즐겨 보는 콘텐츠를<br/> 저장해 오프라인으로<br/> 시청하세요.</h1>
                        <h2>간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
                    </div>
                </div>
            </div>
            <div class="device watch">
                <div class="f_container">
                    <div class="f_text de_text">
                        <h1>다양한 디바이스에서<br/> 시청하세요.</h1>
                        <h2>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, <br/>TV에서 무제한으로 스트리밍하세요. 추가 <br/> 요금이 전혀 없습니다.</h2>
                    </div>
                    <div class="f_img">
                        <div class="deimg">
                            <img class="deviceimg"
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                                alt=""/>
                            <div class="d_ani_container">
                                <video autoplay playsinline muted loop
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kids watch">
                <div class="f_container">
                    <div class="f_img">
                        <div class="kimg">
                            <img class="kidimg"
                                src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf"
                                alt=""/>
                        </div>
                    </div>
                    <div class="f_text k_text">
                        <h1>어린이 전용 프로필을 만들어 보세요.</h1>
                        <h2>자기만의 공간에서 좋아하는 캐릭터와 즐기는<br/>신나는 모험. 자녀에게 이 특별한 경험을 <br/>선물하세요. 넷플릭스 회원이라면 무료입니다.</h2>
                    </div>
                </div>
            </div>

            <div class="faq watch">
                <div class="faq_text">
                    <h1>자주 묻는 질문</h1>
                    <List_item></List_item>

                    <EmailForm></EmailForm>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-wrapper">
            <div class="footer_container">
                <div class="footer">
                    <p class="footer-top">
                        질문이 있으신가요? 문의 전화: &nbsp;
                        <a class="footer-top-a" href="tel:080-000-0000">080-001-9587</a>
                    </p>
                    <ul class="footer-links">
                        <FooterItem></FooterItem>
                    </ul>
                    
                    <LangSelect></LangSelect>

                    <p class="ko-netflix">넷플리스 대한민국</p>
                    <div class="copy-text">
                        <FooterText></FooterText>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
);
}

export default Start;
