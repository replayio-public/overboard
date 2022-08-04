import withTM from "next-transpile-modules";
import WebpackReactComponentNamePlugin from "webpack-react-component-name";

export default withTM(["@replayio/overboard"])({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
});
