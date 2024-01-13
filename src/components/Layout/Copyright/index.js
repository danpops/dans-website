import { CopyrightText } from './styles'

export default function Copyright () {
  const year = new Date().getFullYear()
  return <CopyrightText>© {year} - danpops.ca</CopyrightText>
}
