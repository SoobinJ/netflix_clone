import React from "react";

const tablist=[
    {
        name:'홈',
        href:'',
    },
    {
        name:'시리즈',
        href:'',
    },
    {
        name:'영화',
        href:'',
    },
    {
        name:'NEW! 요즘 대세 콘텐츠',
        href:'',
    },
    {
        name:'내가 찜한 콘텐츠',
        href:'',
    },
]

function TabList(props){
    return(
        <li> 
            <a class='tabmenu' href={props.href}>{props.name}</a>
        </li>
    )
}
function TabMenu(){
    return(
        <ul class="tab">
            {tablist.map((list)=>{
                return <TabList name={list.name} href={list.href}/>
            })}
        </ul>
    )
}

export default TabMenu;