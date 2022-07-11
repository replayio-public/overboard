import withTM from "next-transpile-modules";

export default withTM(["@replayio/overboard"])({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
});
