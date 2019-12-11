import React from 'react'
import Logo from '../assets/nullfull-logo.svg'
import GitHubRepos from '../components/GitHubRepos.js'
import './style.css'


const Index = () => {
    return (
        <div>
            <header>
                <h3>이 웹사이트는 리뉴얼 중이랍니다.</h3>
                <h1>
                    <img src={Logo} alt="nullfull-logo"></img>
                </h1>
                <p><strike>하는 일 없이</strike> 모여서 감자튀김 먹는 모임</p>
            </header>
            <hr />
            <main>
                <section className="lead-image">
                    /* TODO : 여기에 Lead 이미지 (감자튀김) 들어감 */
                </section>
                <hr />
                <section>
                    <h2><a href="https://www.facebook.com/groupnullfull/">Facebook NullFull 그룹페이지</a></h2>
                    <h3>다음 모임 공지</h3>
                    <p>/* TODO : 여기에 다음 이벤트 공지를 페이스북에서 긁어와서 표시 */</p>
                </section>
                <hr />
                <section>
                    <h3>대화방 참여</h3>
                    <p><a href="https://nullfull-slack-invite.herokuapp.com/" target="_blank">슬랙 초대링크</a></p>
                    <p>/* TODO : 여기에 슬랙 통계 */</p>
                </section>
                <hr />
                <section>
                    <h3>우리가 한 짓들 <a href="https://github.com/nullfull" target="_blank">Github Link</a></h3>
                    <GitHubRepos />
                </section>
                <hr />
                <section>
                    <h3>웹사이트의 목적 (리뉴얼의 목적)</h3>
                    <ul>
                        <li>웹사이트를 보고 모임에 참석하고 싶게 한다. -> 다음 모임 공지 표시</li>
                        <li>우리가 그동안 만든거 자랑한다 -> 깃헙 저장소 + 설명</li>
                        <li>슬랙 들어오게 만든다 -> 슬랙 통계</li>
                        <li>모임에 안와본 사람이 보고 당황하지 않아야 함 -> 예쁜 디자인</li>
                    </ul>
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
                        <li>
                            들어갈 내용 넣기
                            <ul>
                                <li><strike>슬랙 초대 링크</strike> -> 완료</li>
                                <li><strike>페이스북 링크</strike> -> 완료</li>
                                <li><strike>Github 링크</strike> -> 완료</li>
                                <li><strike>프로젝트 목록</strike> -> 완료</li>
                                <li>하고 싶은 주제</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>All Right Reserved? 2019. NullFull. </p>
            </footer>
        </div>
    )
}

export default Index
