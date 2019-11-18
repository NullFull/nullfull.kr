import React from 'react'
import './style.css'


const Index = () => {
    return (
        <div>
            <h1>널채움</h1>
            <hr />
            <div>

            </div>
            <hr />
            <div>
                <h3>웹사이트의 목적 (+리뉴얼의 목적)</h3>
                <ul>
                    <li>웹사이트를 보고 모임에 참석하고 싶게 한다</li>
                    <li>우리가 그동안 만든거 자랑한다</li>
                    <li>모임에 안와본 사람이 보고 당황하지 않아야 함</li>
                </ul>
            </div>
            <hr />
            <div>
                <h3>웹사이트 구성요소</h3>
                <ul>
                    <li>슬랙 초대 링크</li>
                    <li>페이스북 링크</li>
                    <li>Github 링크</li>
                    <li>프로젝트 목록</li>
                    <li>하고 싶은 주제</li>
                </ul>
            </div>
            <hr />
            <h3>TODO</h3>
            <ul>
                <li><strike>배포</strike> -> 완료</li>
                <li>
                    디자인
                    <ul>
                        <li>로고</li>
                        <li>리드 이미지</li>
                        <li><strike>푸터</strike></li>
                        <li>또 뭐 해야되지...</li>
                    </ul>
                </li>
                <li>GA달기</li>
            </ul>

            <footer>
                <p>All Right Reserved? 2019. Nullfull. </p>
            </footer>
        </div>
    )
}

export default Index
