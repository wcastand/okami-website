import Link from 'next/link'
import glamorous, {Div} from 'glamorous'

const A = glamorous.a({
  color: '#232323',
  fontSize: 16,
  fontWeight: 500,
  cursor: 'pointer',
  textDecoration: 'underline',
  transition: 'color .3s ease-out',
  ':hover': {
    color: '#EA5858',
  },
  ':focus': {
    color: '#EA5858',
  },
})

const MLink = ({text, external, ...props}) =>
  external ? (
    <A {...props}>{text}</A>
  ) : (
    <Link {...props}>
      <A>{text}</A>
    </Link>
  )

export default MLink
