module.exports = {
  siteMetadata: {
    title: 'Gleycon Xavier',
    description: 'Software Developer',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito Sans']
        }
      }
    }
  ]
};
