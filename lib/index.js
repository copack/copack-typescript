var module = exports;

module.order = 500;

module.configure = function (config) {
  config.webpack.resolve.extensions = 
    ['.web.ts', '.ts', '.web.tsx', '.tsx', ...config.webpack.resolve.extensions];

  config.webpack.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader')
  });
  
  return config;
}
