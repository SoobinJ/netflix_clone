import React from "react";

import BillboardLayer from "./BillboardLayer";
import Card from "./Card";
import FillContainer from "./FillContainer";


function MainView(){

    return(
        <div class='billboard-back'>
            <span class='billboard-container'>
                <div class="billboard-row">
                    <BillboardLayer></BillboardLayer>
                    <FillContainer></FillContainer>
                </div>
            </span>

            <Card name="한국 드라마"></Card>
            <Card name="지금 뜨는 콘텐츠"></Card>
            <Card name="스릴러 시리즈"></Card>
            <Card name="오늘 대한민국의 TOP 10 시리즈" class="rank"></Card>
            <Card name="오늘 대한민국의 TOP 10 영화" class="rank"></Card>
            <Card name="코미디 시리즈"></Card>
            <Card name="한국 드라마 & 버라이어티"></Card>
            <Card name="독립 에피소드 해외 시리즈"></Card>
        </div>
        )
}

export default MainView;