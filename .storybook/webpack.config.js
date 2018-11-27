const path = require("path")

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })
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
  })
  storybookBaseConfig.resolve.alias['@'] = path.dirname(path.resolve(__dirname))
  storybookBaseConfig.resolve.alias['~'] = path.dirname(path.resolve(__dirname))

  return storybookBaseConfig
}