/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'dist/.next',
  webpack: (config, options) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    };
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    // polyfill 及 客户端脚本
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift(
          'intersection-observer',
        );
      }
      return entries;
    };

    return config;
  },
  images: {
    loader: 'imgix',
    path: '',
  },

  assetPrefix: isProd ? 'https://mat1.gtimg.com/qqcdn/20whitepage/out/' : '',
};
