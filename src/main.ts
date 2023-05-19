import './components'

import { MSAvatar } from './components'

import { createStyled } from './utils/styled-component'

export const StyledAvatar = createStyled(
  'styled-avatar',
  MSAvatar,
)(`
:host{
  background-color: blue;
  height: 120px;
}
`)
