import { CustomInput, CustomTextArea } from './styles'

export function TextArea ({ id, name, value, onChange, placeholder }) {
  return (
    <CustomTextArea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={3}
    />
  )
}
export function TextInput ({ id, type, name, value, onChange, placeholder }) {
  return (
    <CustomInput
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
