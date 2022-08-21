import React from "react";

const texts=[
    {
        text:"넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587",
    },
    {
        text:"대표: 레지널드 숀 톰프슨",
    },
    {
        text:"이메일 주소: korea@netflix.com",
    },
    {
        text:"주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161",
    },
    {
        text:"사업자등록번호: 165-87-00119",
    },
    {
        text:"클라우드 호스팅: Amazon Web Services Inc.",
    },
    {
        text:<a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">공정거래위원회 웹사이트</a>,
    }
]
function FooterText(){
    return(
        texts.map((item)=>{
            return <div class="copy-text-block">{item.text}</div>
        })
    )
}

export default FooterText;