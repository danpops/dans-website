import { CustomToggle, ToggleLabel, ToggleWrapper } from './styles'

export function ToggleButton ({
  label,
  active,
  disabled = false,
  onClick,
  icon
}) {
  return (
    <CustomToggle $active={active} disabled={disabled} onClick={onClick}>
      <ToggleWrapper>
        {icon}
        <ToggleLabel>{label}</ToggleLabel>
      </ToggleWrapper>
    </CustomToggle>
  )
}
