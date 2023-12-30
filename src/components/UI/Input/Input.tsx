import { ChangeHandler } from 'react-hook-form'
import styles from './Input.module.scss'

interface IInputProps {
  type?: string
  register?: {
    name?: string
    onChange?: ChangeHandler
    onBlur?: ChangeHandler
    ref?: React.Ref<HTMLInputElement>
  }
  placeholder?: string,
  autocomplete?: string
}

const Input: React.FC<IInputProps> = ({ type, register, placeholder, autocomplete }) => {
  return (
    <input
      type={type}
      className={styles.Input}
      {...register}
      placeholder={placeholder}
      autoComplete={autocomplete}
    />
  )
}

export default Input
