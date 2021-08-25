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

// Export config
const nextConfig = {};

const withPlugins = require('next-compose-plugins');
module.exports = withPlugins(plugins, nextConfig);
