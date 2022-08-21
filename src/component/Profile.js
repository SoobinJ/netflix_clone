import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accountState } from '../recoil/Account';
import profiles from "../db/profiles.json";
import { useState } from 'react';

function ProfileItem(props){
    const url=props.u;
    const [account, setAccount]=useRecoilState(accountState);

    const click=(props)=>{
        const accountName=props.target.className;
        setAccount(accountName);
    }

    const profileName=props.n;

    const [out,setOut]=useState('out');

    const style={
        backgroundImage:
        `url(${url})`,
        border:out=="out"?"none":"4px solid #fff",
    }

    const mouseover=()=>{
        setOut('in');
    }
    const mouseout=()=>{
        setOut('out');
    }

    return(
        <li id="profile" class={profileName}>
            <Link to='/Main'>
                <div class={profileName} id="profile-icon" 
                    onMouseOver={mouseover} onMouseOut={mouseout} onClick={click} style={style}></div>
                <span class={profileName} id="profile-name" onMouseOver={mouseover} onMouseOut={mouseout} 
                style={{
                    color:out=="out"?"grey":"#fff",
                }}>{props.n}</span>
            </Link>
        </li>
    )
}

function Profile(){
    return(
        profiles.map((profiles)=>{
            return <ProfileItem n={profiles.name} u={profiles.url}></ProfileItem>
        })
    )
}




export default Profile;