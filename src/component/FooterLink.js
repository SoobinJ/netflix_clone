import React from "react";
import dummy from "../db/footeritem.json";

function Item(props){
    return (
        <li class="footer-link-item">
            <a class="footer-link" href={props.href}>
                <span>{props.item}</span>
            </a>
        </li>
    )
}

function FooterItem(props){

    const name=props.name;
    const id="login";
    let list=dummy.start;
    
    if(name=="login"){
        list =list.filter(start=>(
            start.id==id
        ))
    }else if(name=="main"){
        list=dummy.main;
    }
    return(
        list.map((item)=>{
            return <Item item={item.item} href={item.href}/>;
        })
    )
}

export default FooterItem;
