import { add } from './add'
import { addCircle } from './add-circle'
import { arrowDown } from './arrow-down'
import { arrowLeft } from './arrow-left'
import { arrowRight } from './arrow-right'
import { arrowUp } from './arrow-up'
import { cross } from './cross'
import { error } from './error'
import { eye } from './eye'
import { eyeSlash } from './eye-slash'
import { folder } from './folder'
import { info } from './info'
import { star } from './star'
import { success } from './success'
import { trash } from './trash'
import { warning } from './warning'

export const Icons = {
  add: add,
  addCircle: addCircle,
  arrowDown: arrowDown,
  arrowLeft: arrowLeft,
  arrowRight: arrowRight,
  arrowUp: arrowUp,
  cross: cross,
  error: error,
  eye: eye,
  eyeSlash: eyeSlash,
  folder: folder,
  info: info,
  star: star,
  success: success,
  trash: trash,
  warning: warning,
}
export type MsIcons = typeof Icons

export const iconNameAllowed = Object.keys(Icons)
