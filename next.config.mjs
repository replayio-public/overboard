import WebpackReactComponentNamePlugin from "webpack-react-component-name";

export default {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
};
