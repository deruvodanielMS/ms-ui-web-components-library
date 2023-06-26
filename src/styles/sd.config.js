import { pluralize } from './generator-helper.js'

// @TODO: find a better way to get token types, currently are copied from figma token
const tokenTypes = [
  'color',
  'sizing',
  'spacing',
  'borderRadius',
  'borderWidth',
  'typography',
  // 'boxShadow',
  // 'typography',
  // 'fontFamily',
  // 'fontWeight',
  // 'lineHeight',
  // 'fontSize',
  // 'LetterSpacing',
  // 'ParagraphSpacing',
  // 'textCase',
  // 'textDecoration',
  // 'Dimension',
]

export default {
  source: ['src/styles/transformed-tokens/**/*.json'],
  platforms: {
    // css: {
    //   transformGroup: 'css',
    //   prefix: 'ms',
    //   buildPath: 'src/styles/usable-tokens/',
    //   files: tokenTypes.map((tokenType) => {
    //     return {
    //       destination: `${tokenType}.css`,
    //       format: 'css/variables',
    //       filter: {
    //         type: tokenType,
    //       },
    //     }
    //   }),
    // },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/styles/tokens/default/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/hex'],
      files: tokenTypes.map((tokenType) => {
        return {
          destination: `${pluralize(
            tokenType.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase(),
          )}.ts`,
          format: 'custom/typed-ts',
          filter: {
            type: tokenType,
          },
        }
      }),
    },
  },
}
