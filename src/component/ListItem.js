import React, { useEffect, useState } from "react";
import $ from 'jquery';
import qna from '../db/qna.json';

function Item(props){
    const [state,setState]=useState(false);

    function qnaclick(e){

        if(state==true){//열린 상태
            $('.answer').addClass('closed');
            $('svg').addClass('svgclosed');
            $('svg').removeClass('svgopen');
            e.target.nextElementSibling.classList.add('closed');
        }
        else if(state==false){//닫힌 상태
            $('.answer').addClass('closed');
            $('svg').addClass('svgclosed');
            $('svg').removeClass('svgopen');
            e.target.nextElementSibling.classList.remove('closed');
            e.target.children[0].classList.add('svgopen');
        }
        setState(!state)
}

    return (
        <li class="list-item">
            <button class="question" onClick={qnaclick}>
                {props.q}
                <svg 
                    viewBox='0 0 26 26' 
                    focusable='true' 
                    class={state?'svgopen':'svgclosed'}
                >
                    <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
                </svg>
            </button>
            <div class="answer closed">
                <span>
                    {props.a}
                </span>
            </div>
        </li>

    )
}

function List_item(){

    return(
        <ul class="list">
            {qna.map((qna)=>{
            return <Item q={qna.question} a={qna.answer}/>
            })}
        </ul>

    )
}


export default List_item