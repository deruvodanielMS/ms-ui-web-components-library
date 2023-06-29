import { css, unsafeCSS } from 'lit'

import { typographies, type MsTypographies } from '~/styles/tokens/default/typographies'
import { defaultMSTheme } from '~/theme'
import { getThemeColor } from '~/utils'

const typographyStylesGenerator = () => {
  const typographyVariants = Object.keys(typographies)

  return typographyVariants
    .map((variant) => {
      const themeBase = defaultMSTheme.typographies[variant as keyof MsTypographies]
      return `.${variant} {
      font-size: var(--${variant}-font-size, ${themeBase.fontSize}px);
      font-family: var(--${variant}-font-family, ${themeBase.fontFamily});
      font-weight: var(--${variant}-font-weight, ${themeBase.fontWeight});
      line-height: var(--${variant}-line-height, ${themeBase.fontSize}px);
      letter-spacing: var(--${variant}-letter-spacing, ${themeBase.letterSpacing});
    }`
    })
    .join('')
}

export const msTypographyStyles = css`
  :host {
    color: ${getThemeColor('gray-900')};
    box-sizing: border-box;
  }
  :host > *:first-child {
    margin: 0;
    box-sizing: border-box;
  }
  ${unsafeCSS(typographyStylesGenerator())}
`
