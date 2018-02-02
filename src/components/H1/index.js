import { h, app } from "hyperapp"
import picostyle from "picostyle"

const style = picostyle(h)

export default style('h1')({
  fontSize: '5em',
  textAlign: 'center',
  color: 'palevioletred'
})
