import React from "react";
import Profile from "../component/Profile";
import './User.css';
import $ from 'jquery';
import { Link } from "react-router-dom";

function User(){
    return(
        <div>
            <div class="header-container">
                <div class="logo-header">
                    <Link to='/'>
                        <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
                    </Link>
                </div>
            </div>

            <div class="profiles">
                <div class="profile-container">
                    <div class="UserList">
                        <h1>넷플릭스를 시청할 프로필을 선택하세요.</h1>
                        <ul class="choose">
                            <Profile></Profile>
                        </ul>
                    </div>

                    <span class="btn-box">
                        <a href="" class="profile-btn" onMouseOver={mouseOver} onMouseOut={mouseOut}>프로필 관리</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

function mouseOver(){
    $('.profile-btn').css({
        'color':'#fff',
        'border':'1px solid #fff'
    })
}

function mouseOut(){
    $('.profile-btn').css({
        'color':'grey',
        'border':'1px solid grey'
    })
}

export default User;