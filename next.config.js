const withAntdLess = require('next-plugin-antd-less');

// Plugins for NextJS
const plugins = [
  [
    withAntdLess({
      lessVarsFilePath: './src/styles/variables.less',
      cssLoaderOptions: {
        esModule: false,
        sourceMap: false,
        modules: {
          mode: 'local',
        },
      },
    }),
  ],
];

// Environment variables config
const envConfig = {
  env: {
    ENV: process.env.ENV,

    WEATHER_API_ENDPOINT: process.env.WEATHER_API_ENDPOINT,
  },
};

// Export config
const nextConfig = {
  ...envConfig,
};

const withPlugins = require('next-compose-plugins');
module.exports = withPlugins(plugins, nextConfig);
