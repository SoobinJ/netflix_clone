import React from "react";
import item from "../db/morecarditem.json" ;


function CardItem(props){

    return(
        <div className="moreCardItem">
            <div className="morecard-imageWrapper">
                <div>
                    <img style={{display:"block", width:"100%"}}
                    src={props.src}></img>
                </div>
                <span className="moreCard-duration">에피소드 {props.duration}개</span>
            </div>
            <div className="morecard-metaWrapper">
                <div className="morevideoMetadata-container">
                    <div className="metadata-two">
                        <div className="metadata-firstLine">
                            <div className="score-wrapper">
                                <span style={
                                    {
                                        opacity:props.score=="none"?"0":"1"
                                    }
                                }>{props.score}% 일치</span>
                            </div>
                        </div>
                        <div className="metadata-secondLine">
                            <div className="moreCard-year">{props.year}</div>
                            <span className="morecard-rating">
                                {props.rating==="15"?                                
                                <span className="moreCard-rating-graphic">
                                    <svg viewBox="0 0 100 100">
                                        <path fill="#cd6d34" d="M88.727 100H11.27C5.05 100 0 94.952 0 88.727V11.273C0 5.047 5.05 0 11.27 0h77.457C94.952 0 100 5.047 100 11.273v77.454C100 94.952 94.952 100 88.727 100"></path>
                                        <path fill="#fffffe" d="M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z"></path>
                                    </svg>
                                </span>
                                :<span className="moreCard-rating-num">{props.rating}</span>}
                                
                            </span>
                        </div>

                    </div>
                    <div className="plus-btn">
                        <button className="btncontrol">
                            <div style={{
                                height:"1.8rem",
                                width:"1.8rem"
                            }}>
                                <svg width={24} height={24} viewBox="0 0 24 24" >
                                    <path d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fillRule="evenodd" fill="#fff"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <p className="moreCard-synopsis">
                        <div>
                        {props.synopsis}
                        </div>
                    </p>
            </div>
        </div>
    )
}

function MoreCardItem(){
    return(
        item.map((item,index)=>{
            return<CardItem 
            key={index} src={item.src} duration={item.duration} score={item.score} 
            year={item.year} rating={item.rating} synopsis={item.synopsis}
            ></CardItem>
        })
    )
}


export default MoreCardItem;