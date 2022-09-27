import React from 'react'
import Logo from '../assets/nullfull-logo.svg'
import OGImage from '../assets/og.png'
import LeadImage from '../components/LeadImage'
import GitHubRepos from '../components/GitHubRepos'
import FacebookEvents from '../components/FacebookEvents'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import './style.css'


const Index = ({ data }) => {
    const { site: { siteMetadata } } = data
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
            <header className="header">
                <h1 className="header-logo">
                    <img src={Logo} alt="nullfull-logo" className="logo-image" />
                </h1>
            </header>
            <main>
                <section className="section-lead">
                    <LeadImage />
                </section>
                <section className="section-facebook">
                    <h2 className="title">다음 모임 공지</h2>
                    <FacebookEvents />
                    <a href="https://www.facebook.com/groupnullfull/" target="_blank" className="external-link">Facebook에서 구독하기</a>
                </section>
                <section className="section-discord">
                    <a href="https://discord.gg/SfY3QsbnBR" target="_blank" className="external-link"><h2 className="title">디스코드 대화방 참여</h2></a>
                </section>
                <section className="section-project">
                    <h2 className="title">우리가 한 짓들</h2>
                    <a href="https://github.com/nullfull" target="_blank" className="external-link">GitHub에서 전체 보기</a>
                    <GitHubRepos />
                </section>
                <div className="marquee-text">
                    <p>하는 일 없이 모여서 감자튀김 먹는 모임</p>
                </div>
            </main>
            <footer>
                All Right Reserved © {year} NullFull
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
