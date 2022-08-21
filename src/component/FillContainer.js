import React from "react";
import LinkBtn from "./LinkBtn";
import { Link } from "react-router-dom";

function FillContainer(){
    return(
        <div class='fill-container'>
            <div class='info'>
                <div class='logo-and-text'>
                    <div class='title-wrapper'>
                        <div class='billboard-title'>
                            <img class='title-logo' src="https://occ-0-4959-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXNV6jNZjF4lH-P19fVJ1cy2HbHxl_2-fmI6vioprb8Ctt3yN2_PdcH80F7XcBz_gPVx58puns6PRWD6psZqQPzBPIX4FxzSImZaIpb9eE3GSkYIlS6LYvxmDIU7RT0ydhJb6t6RfNdCDWxypfQfF5CdBDD9OyuwaW3yekhVonjN6YWrxSDA5w.webp?r=0d3"></img>
                        </div>
                    </div>
                    <div class='info-wrapper'>
                        <div class='info-wrapper-fade'>
                            <div class='message'>
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M 3 2 C 2.44772 2 2 2.44772 2 3 V 21 C 2 21.5523 2.44772 22 3 22 H 21 C 21.5523 22 22 21.5523 22 21 V 3 C 22 2.44772 21.5523 2 21 2 H 3 Z M 17.2299 10.8934 C 16.6125 10.4971 15.8913 10.2996 15.0673 
                                    10.2996 C 14.2444 10.2996 13.5231 10.4971 12.9056 10.8934 C 12.2881 11.2905 11.8114 11.8536 11.4762 12.5839 C 11.1411 13.3149 10.9735 14.1695 10.9735 15.1493 C 10.9735 16.1383 11.1411 16.9957 11.4762 17.7221 C 11.8114 18.4478 12.2881 19.0091 12.9056 19.4052 C 13.5231 19.8014 14.2444 20 15.0673 20 C 15.8913 20 16.6125 19.8014 17.2299 19.4052 C 17.8475 19.0091 18.3242 18.4478 18.6594 17.7221 C 18.9945 16.9957 19.1612 16.1383 19.1612 15.1493 C 19.1612 14.1695 18.9945 13.3149 18.6594 12.5839 C 18.3242 11.8536 17.8475 11.2905 17.2299 10.8934 Z M 9.47922 19.7994 V 10.3263 L 4.92658 11.4351 V 13.2656 L 7.20991 12.6774 V 19.7994 H 9.47922 Z M 13.7606 12.9513 C 14.0767 12.4298 14.5117 12.1701 15.0673 12.1701 C 15.6239 12.1701 16.0589 12.4298 16.3751 12.9513 C 16.6913 13.4718 16.8489 14.2058 16.8489 15.1493 C 16.8489 16.0938 16.6913 16.8268 16.3751 17.3473 C 16.0589 17.8688 15.6239 18.1296 15.0673 18.1296 C 14.5117 18.1296 14.0767 17.8688 13.7606 17.3473 C 13.4442 16.8268 13.2868 16.0938 13.2868 15.1493 C 13.2868 14.2058 13.4442 13.4718 13.7606 12.9513 Z M 13.0737 4.19939 C 12.7285 4.06677 12.3485 4 11.9344 4 C 11.5194 4 11.1405 4.06677 10.7952 4.19939 C 10.4521 4.33122 10.1518 4.51771 9.89848 4.75622 C 9.64404 4.99367 9.44963 5.27379 9.312 5.59396 C 9.17437 5.91504 9.10556 6.26299 9.10556 6.63872 C 9.10556 7.01446 9.17437 7.36241 9.312 7.68349 C 9.44963 8.00352 9.64404 8.28286 9.89848 8.52136 C 10.1518 8.75974 10.4521 8.9453 10.7952 9.07792 C 11.1405 9.20976 11.5194 9.27745 11.9344 9.27745 C 12.3485 9.27745 12.7285 9.20976 13.0737 9.07792 C 13.4168 8.9453 13.7161 8.75974 13.9704 8.52136 C 14.2239 8.28286 14.4194 8.00352 14.557 7.68349 C 14.6947 7.36241 14.7635 7.01446 14.7635 6.63872 C 14.7635 6.26299 14.6947 5.91504 14.557 5.59396 C 14.4194 5.27379 14.2239 4.99367 13.9704 4.75622 C 13.7161 4.51771 13.4168 4.33122 13.0737 4.19939 Z M 8.75526 5.30869 V 4.12288 H 4 V 5.30869 H 5.63894 V 9.15457 H 7.11632 V 5.30869 H 8.75526 Z M 18.9904 4.3469 C 18.6683 4.19847 18.2893 4.12327 17.8484 4.12327 H 15.5101 V 9.15392 H 16.9855 V 7.70838 H 17.8484 C 18.2893 7.70838 18.6683 7.63318 18.9904 7.48384 C 19.3117 7.33541 19.5601 7.12483 19.7366 6.85484 C 19.9132 6.58578 20 6.26931 20 
                                    5.90845 C 20 5.55682 19.9132 5.24587 19.7366 4.97602 C 19.5601 4.70683 19.3117 4.49624 18.9904 4.3469 Z M 11.2392 5.39166 C 11.4387 5.27379 11.6701 5.21545 11.9344 5.21545 C 12.1988 5.21545 12.4302 5.27379 12.6297 5.39166 C 12.8292 5.50954 12.9849 5.67653 13.0955 5.89001 C 13.2072 6.10521 13.2632 6.35386 13.2632 6.63872 C 13.2632 6.92267 13.2072 7.17224 13.0955 7.38651 C 12.9849 7.60092 12.8292 7.76791 12.6297 7.88565 C 12.4302 8.00352 12.1988 8.062 11.9344 8.062 C 11.6701 8.062 11.4387 8.00352 11.2392 7.88565 C 11.0397 7.76791 10.8841 7.60092 10.7724 7.38651 C 10.6617 7.17224 10.6057 6.92267 10.6057 6.63872 C 10.6057 6.35386 10.6617 6.10521 10.7724 5.89001 C 10.8841 5.67653 11.0397 5.50954 11.2392 5.39166 Z M 16.9855 5.27195 H 17.6149 C 17.9252 5.27195 18.1515 5.32845 18.2913 5.43895 C 18.4309 5.54931 18.5017 5.70616 18.5017 5.90845 C 18.5017 6.11535 18.4309 6.27589 18.2913 6.38902 C 18.1515 6.50228 17.9252 6.55878 17.6149 6.55878 H 16.9855 V 5.27195 Z">
                                    </path>
                                </svg>
                                오늘 영화 순위 4위
                            </div>
                            <div class='synopsis-fade'>
                                <div class='synopsis'>
                                전설적인 바다 괴물 사냥꾼의 배에 여자아이가 몰래 숨어든다. 이제 한배에 탄 둘은 미지의 바다를 향해 대장정의 항해를 떠나는데. 이들은 어떤 역사를 쓰게 될까.
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class='billboard-links-btn'>
                        <Link to="/" class='playLink'>
                            <LinkBtn n='playLink'></LinkBtn>
                        </Link>
                        <LinkBtn n='informBtn'></LinkBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FillContainer;