type BaseTypography = {
  fontSize: string | number
  fontWeight?: number
  lineHeight?: number
  letterSpacing?: number
}

export type ThemeTypography = {
  baseFontSize: number
  baseFontWeight?: number
  fontFamily: string
  h1: BaseTypography
  h2: BaseTypography
  h3: BaseTypography
  h4: BaseTypography
  h5: BaseTypography
  h6: BaseTypography
  body1: BaseTypography
  body2: BaseTypography
}
