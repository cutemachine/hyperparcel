import { h, app } from "hyperapp"
import picostyle from "picostyle"

const style = picostyle(h)

export default style('section')({
  padding: '4em',
  background: 'papayawhip',
  height: '100vh',
})
