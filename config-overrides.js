const { override, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require("path");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackAlias({
    ['imgs']: path.resolve(__dirname, './src/assets/imgs'),
  })
);
