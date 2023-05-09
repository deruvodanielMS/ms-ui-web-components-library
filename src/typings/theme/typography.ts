type baseTypograhy = {
  fontSize: string | number
  fontWeight?: number
  lineHeight?: number
  letteSpacing?: number
}

export type themeTypography = {
  baseFontSize: number
  baseFontWeight?: number
  fontFamily: string
  h1: baseTypograhy
  h2: baseTypograhy
  h3: baseTypograhy
  h4: baseTypograhy
  h5: baseTypograhy
  h6: baseTypograhy
  body1: baseTypograhy
  body2: baseTypograhy
}
