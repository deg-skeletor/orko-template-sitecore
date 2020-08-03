const browserslist = require('browserslist');

/* cssnano preset for the RTE stylesheet to prevent empty rules from being discarded and selectors with common rules to be merged */
const rteCssNanoPreset = {
  preset: ['default', {
      discardEmpty: false,
      mergeRules: false
  }]
};

module.exports = ({isRte} = {}) => ({
  plugins: [
      require('postcss-easy-import'),
      require('postcss-mixins'),
      require('postcss-preset-env')({
          stage: 1, 
          browsers: browserslist(null, { env: 'legacy'})
      }),
      require('cssnano')(isRte ? rteCssNanoPreset : {})
  ]
});