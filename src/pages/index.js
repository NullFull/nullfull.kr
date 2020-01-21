import React from 'react'
import Logo from '../assets/nullfull-logo.svg'
import Lead from '../assets/lead.jpg'
import GitHubRepos from '../components/GitHubRepos'
import FacebookEvents from '../components/FacebookEvents'
import SlackStatistics from '../components/SlackStatistics'
import './style.css'


const Index = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <header>
                <h3 className="notice-container">
                    <span className="notice-text">이 웹사이트는 리뉴얼 중이랍니다.</span>
                </h3>
                <h1>
                    <img src={Logo} alt="nullfull-logo" className="logo-image"/>
                </h1>
                <p><strike>하는 일 없이</strike> 모여서 감자튀김 먹는 모임</p>
            </header>
            <hr />
            <main>
                <section className="lead-image">
                    <img src={Lead} />
                </section>
                <hr />
                <section>
                    <h3>다음 모임 공지</h3>
                    <FacebookEvents />
                    <p><a href="https://www.facebook.com/groupnullfull/" target="_blank">Facebook에서 구독하기</a></p>
                </section>
                <hr />
                <section>
                    <h3>대화방 참여</h3>
                    <p><a href="https://nullfull-slack-invite.herokuapp.com/" target="_blank">Slack에서 같이 떠들기</a></p>
                    <SlackStatistics />
                </section>
                <hr />
                <section>
                    <h3>우리가 한 짓들</h3>
                    <p><a href="https://github.com/nullfull" target="_blank">GitHub에서 전체 보기</a></p>
                    <GitHubRepos />
                </section>
            </main>
            <footer>
                <p>All Right Reserved © {year} NullFull </p>
            </footer>
        </div>
    )
}

export default Index
