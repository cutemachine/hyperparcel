import { h, app } from "hyperapp"
import picostyle from "picostyle"

const style = picostyle(h)

export default style('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})
