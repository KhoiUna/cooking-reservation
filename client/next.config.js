module.exports = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  //Redirect pages
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
