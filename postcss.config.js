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
      require('postcss-custom-properties'),
      require('postcss-custom-selectors'),
      require('postcss-custom-media'),
      require('postcss-color-mod-function'),
      require('postcss-nesting'),
      require('autoprefixer')({
          env: 'legacy'
      }),
      require('cssnano')(isRte ? rteCssNanoPreset : {})
  ]
});