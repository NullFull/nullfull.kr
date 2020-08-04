import React from 'react'
import Logo from '../assets/nullfull-logo.svg'
import Lead from '../assets/lead.png'
import OGImage from '../assets/og.png'
import GitHubRepos from '../components/GitHubRepos'
import FacebookEvents from '../components/FacebookEvents'
import SlackStatistics from '../components/SlackStatistics'
import SlackInvite from '../components/SlackInvite'
import {graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import './style.css'


const Index = ({data}) => {
    const {site: {siteMetadata}} = data

    const year = new Date().getFullYear()

    return (
        <div>
            <Helmet>
                <title>{siteMetadata.title}</title>
                <meta name="description" content={siteMetadata.description} />

                <meta property="og:image" content={OGImage} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteMetadata.url} />
                <meta property="og:title" content={siteMetadata.title} />
                <meta property="og:description" content={siteMetadata.description} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:creator" content={siteMetadata.twitter} />
                <meta property="twitter:description" content={siteMetadata.description} />
                <meta property="twitter:title" content={siteMetadata.title} />
            </Helmet>
            <header>
                <h3 className="notice-container">
                    <span className="notice-text">이 웹사이트는 리뉴얼 중이랍니다.</span>
                </h3>
                <h1>
                    <img src={Logo} alt="nullfull-logo" className="logo-image"/>
                </h1>
                <p><del>하는 일 없이</del> 모여서 감자튀김 먹는 모임</p>
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
                    <h3>슬랙 대화방 참여</h3>
                    <SlackInvite />
                    <h3>슬랙 대화방 통계</h3>
                    <SlackStatistics />
                </section>
                <hr />
                <section className="project-list">
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

export const query = graphql`
query Query {
  site {
    siteMetadata {
      title
      description
      url
      twitter
    }
  }
}
`