import React from "react";
import dummy from "../db/rankvideolist.json"

function Item(props){
    return(
        <div class="rank-item">
            <div class="title-card-container">
                <div class="title-card">
                    <div class="content">
                        <a>
                            <div class="box-container">
                                <svg width="100%" height="100%" viewBox="20 0 70 154" class={props.num}>
                                    <path stroke="#595959" strokeLinejoin="square" strokeWidth="4" d={props.d}></path>
                                </svg>
                                <img src={props.src}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
function RankItem(props){
    const type=props.name;
    let list=dummy.filter((item)=>
        type==item.id
    )
    return(
        list.map((item)=>{
            return <Item src={item.src} d={item.d} num={item.n}></Item>
        })
    )
}

export default RankItem;