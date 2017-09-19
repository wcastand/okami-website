import React from 'react'
import NextLink from 'next/link'
import glamorous, {Div, A} from 'glamorous'

import Link from './link'
import Title from './title'

const Header = () => (
  <Div>
    <NextLink href="/">
      <A cursor="pointer">
        <Title />
      </A>
    </NextLink>
    <Div
      position="relative"
      top={-95}
      left={251}
      width={308}
      display="flex"
      justifyContent="space-between">
      <Link href="/" text="Home" />
      <Link href="/playground" text="Playground" />
      <Link external href="/storybook" text="Storybook" />
      <Link external href="https://github.com/wcastand/okami" text="Github" />
    </Div>
  </Div>
)

export default Header
