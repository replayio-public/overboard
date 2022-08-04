import withTM from "next-transpile-modules";

export default withTM(["@replayio/overboard"])({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
});
