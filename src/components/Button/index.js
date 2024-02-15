import { CustomToggle, StatusBadge, ToggleLabel, ToggleWrapper } from './styles'

export function ToggleButton ({ label, active, disabled = false, onClick }) {
  return (
    <CustomToggle $active={active} disabled={disabled} onClick={onClick}>
      <ToggleWrapper>
        <StatusBadge $active={active} $disabled={disabled} />
        <ToggleLabel>{label}</ToggleLabel>
      </ToggleWrapper>
    </CustomToggle>
  )
}
