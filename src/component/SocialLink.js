import React from "react";
import dummy from "../db/sociallink.json";

function Item(props){
    return(
        <a class="social-link" href={props.href} target="_blank">
            <svg fill="#fff" class={props.name} width={24} height={24} viewBox="0 0 24 24">
                <path fillRule="evenodd" d={props.d}></path>
            </svg>
        </a>
    )
}
function SocialLink(props){
    const name=props.name;
    let list=dummy;

    if(name=="facebook"){
        list=list.facebook;
    }else if(name=="instagram"){
        list=list.instagram;
    }else if(name=="twitter"){
        list=list.twitter;
    }else{
        list=list.youtube;
    }

    return(
        list.map((item)=>{
            return <Item name={item.name} href={item.href} d={item.d}></Item>
        })
    )
}

export default SocialLink;