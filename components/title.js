import glamorous from 'glamorous'

import Logo from './logo'

const Baseline = glamorous.h2({
  position: 'relative',
  top: -75,
  left: 250,
  fontSize: 22,
  fontWeight: 500,
  color: '#232323',
})

const Title = () => (
  <div>
    <Logo />
    <Baseline children="Primitives for building calendar" />
  </div>
)

export default Title
