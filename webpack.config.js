// webpack.config.js
module.exports = (env) => {
  const environment = env.NODE_ENV || "development";
  return require(`./webpack.${environment}.js`);
};
