function buildConfig(env) {
  return require('./build/' + (env ? env : 'dev' ) + '.js')()
}

module.exports = buildConfig;
