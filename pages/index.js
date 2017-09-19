import React from 'react'
import glamorous, {Div} from 'glamorous'

import Cal from '../components/calendar'
import Header from '../components/header'

export default () => (
  <Div
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    padding={34}>
    <Header />
    <Cal />
  </Div>
)
