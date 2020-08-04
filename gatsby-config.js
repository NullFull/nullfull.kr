module.exports = {
  siteMetadata: {
    title: `널채움`,
    description: `하는 일 없이 감자튀김 먹는 모임`,
    url: `https://nullfull.kr`,
    twitter: `@nullfull_kr`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-143097345-2`,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `ko`
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
