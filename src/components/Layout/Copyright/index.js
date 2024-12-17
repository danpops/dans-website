import { CopyrightText } from './styles'

export default function Copyright () {
  const year = new Date().getFullYear()
  return (
    <CopyrightText
      id='copyright-github-link'
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/danpops/dans-website.git'
    >
      © {year} - danpopovic.com
    </CopyrightText>
  )
}
