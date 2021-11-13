module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Material Icons", "Montserrat"],
        }
      }
    }
  ],
};
