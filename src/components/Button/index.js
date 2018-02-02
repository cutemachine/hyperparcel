import { h, app } from "hyperapp"
import picostyle from "picostyle"

const style = picostyle(h)

export default style('button')({
  background: 'lime',
  border: 'none',
  color: 'papayawhip',
  background: 'palevioletred',
  width: '3em',
  padding: '1em',
  fontSize: '4em',
  textAlign: 'center',
})
