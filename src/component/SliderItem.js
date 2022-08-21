import React from "react";
import dummy from "../db/videolist.json";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRecoilState } from "recoil";
import { popupState } from "../recoil/Popup";
import { scrollState } from "../recoil/Scroll";

const Styled_Slider=styled(Slider)`
    .slick-prev{
        left:-45px;
    }
    .slder-show{
        padding: 0 60px;
    }
    .slick-prev:before, .slick-next:before{
        font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }
`

function I(props){
    const[popup,setPopup]=useRecoilState(popupState);
    const[scroll,setScroll]=useRecoilState(scrollState);

    const handlePopup=()=>{
        setScroll(window.pageYOffset);
        window.scrollTo(0,0);
        return(
            setPopup(!popup)
        )
        
    }
    return(

        <div class="title-card" style={{
            padding:"0 0.2vw"
        }} onClick={handlePopup}>
            <div class="content">
                <a>
                    <div class="box-container">

                            <img src={props.src}></img>

                    </div>
                </a>
            </div>

        </div>

    )
}
function SliderItem(props){

    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:6,
        slidesToScroll:6,
    };

    const type=props.name;
    let list=dummy.filter((item)=>
        type==item.id
    )

    return(
        <div>
            <Styled_Slider class="slider-item" {...settings}>
                {list.map((item)=>{
                    return <I src={item.src}></I>
                })}
            </Styled_Slider>
        </div>

    )
}


export default SliderItem;