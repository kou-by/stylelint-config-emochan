module.exports = {
  plugins: [
    'stylelint-scss'
  ],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],

  rules: {
    'color-no-invalid-hex': true,
    'color-named': 'never',
    'color-hex-case': 'lower',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'function-url-no-scheme-relative': true,
    'shorthand-property-no-redundant-values': true,
    'value-list-comma-newline-after': 'never-multi-line',
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-specificity': '0,2,1',
    'selector-max-type': 1,
    'selector-max-universal': 1,
    'max-nesting-depth': 3,
    'no-unknown-animations': true,
    'font-family-name-quotes': 'always-where-required',
    'number-leading-zero': 'never',
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      { 'ignoreAtRules': [
        'include',
        'mixin',
        'each',
        'if',
        'else',
        'function',
        'return',
        'warn',
        'use',
      ] }
    ],
  }
}
