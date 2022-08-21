import React, { useState } from "react";
import RankItem from "./RankItem";
import SliderItem from "./SliderItem";


function Card(props){


    const type=props.name;
    const cd=props.class;

    function c(){
        if(cd=="rank"){
            return(
                <RankItem name={type}></RankItem>
            )
        }else{
            return(
                <SliderItem name={type}></SliderItem>
            )
        }
    }
    

    return(
        <div class="card">
            <h2 class="card-header">
                <a class="card-title">
                    <div class="row-header-title">{type}</div>
                    {/* 모두보기 처리 필요*/}
                </a>
            </h2>
            <div class="card-row-container">
                <div class="track-container">
                        <div class="slider">

                            <div class="slider-show">
                                {c()}
                            </div>

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Card;