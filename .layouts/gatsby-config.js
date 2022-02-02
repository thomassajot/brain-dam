const path = require("path");
const pathPrefix = "/brain-dam";
const siteMetadata = {
  title: "Brain Dam",
  shortName: "Brain Dam",
  description:
    "Knowledge, thoughts and more, that for some reason I need to remember.",
//   twitterName: "theowenyoung",
//   imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://thomassajot.brain-dam.com",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        icon: "./static/logo.png",
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/thomassajot/brain-dam/",
          },
          {
            title: "About",
            url: "https://twitter.com/theowenyoung",
          },
        ],
        editUrl:
          "https://github.com/theowenyoung/obsidian-template-gatsby-theme-primer-wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
