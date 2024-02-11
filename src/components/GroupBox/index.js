import { GroupLabel, GroupWrapper } from './styles'

export default function GroupBox ({ groupLabel, children }) {
  return (
    <GroupWrapper>
      <GroupLabel>{groupLabel}</GroupLabel>
      {children}
    </GroupWrapper>
  )
}
