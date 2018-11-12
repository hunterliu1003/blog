const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader'
    ]
  });

  storybookBaseConfig.resolve.alias['@'] = path.dirname(path.resolve(__dirname))

  // Return the altered config
  return storybookBaseConfig;
};