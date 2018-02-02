import { h, app } from "hyperapp"
import Wrapper from './components/Wrapper'
import H1 from './components/H1'
import Flex from './components/Flex'
import Button from './components/Button'
import './index.css'

const state = {
  count: 0
}

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) => (
  <Wrapper>
    <H1>{state.count}</H1>
    <Flex>
      <Button onclick={actions.down}>-</Button>
      <Button onclick={actions.up}>+</Button>
    </Flex>
  </Wrapper>
)

const main = app(state, actions, view, document.body)
