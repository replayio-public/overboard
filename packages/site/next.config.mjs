import withTM from "next-transpile-modules";

export default withTM(["@replayio/hoverboard"])({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
});
