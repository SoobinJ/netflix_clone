import React from "react";
import dummy from "../db/linkbtnitem.json"


function Item(props){
    return(
        <button class="linkbtnC" style={{
            color:props.color,
            backgroundColor:props.back
        }}>
            <div>
                <svg width={24} height={24} viewBox="0 0 24 24" style={{fill:props.color}}>
                    <path d={props.d}></path>
                </svg>
            </div>
            <div class="ab" style={{width:'1rem'}}></div>
            <span>{props.text}</span>
        </button>
    )
}
function LinkBtn(props){
    const name=props.n;
    const id="playLink";
    let list=dummy;

    if(name==id){
        list=list.play;
    }else{
        list=list.inform;
    }

    return(
        list.map((item)=>{
            return <Item d={item.d} text={item.text} color={item.color} back={item.backgroundColor}></Item>
        })
    )
}
export default LinkBtn;