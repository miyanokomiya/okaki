// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  parser: require('postcss-comment'),
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-nested": {},
    "postcss-simple-vars": {}
  }
}
