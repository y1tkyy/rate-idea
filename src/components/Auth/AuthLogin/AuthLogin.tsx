import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './AuthLogin.module.scss'
import { Button, ErrorText, Input } from '../..'
import { openRegistrModal, useAppDispatch } from '../../../redux'

type Inputs = {
  email: string
  password: string
}

const requiredMessage = 'This field is required'

const AuthLogin: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }

  return (
    <form className={styles.AuthLogin} onSubmit={handleSubmit(onSubmit)}>
      <h4>Log In to Your Account</h4>
      <div className={styles.field}>
        <label>Email</label>
        <Input
          register={register('email', {
            required: requiredMessage,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          placeholder="Email"
          autocomplete="email"
        />
        {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
      </div>
      <div className={styles.field}>
        <label>Password</label>
        <Input
          register={register('password', { required: requiredMessage })}
          type="password"
          placeholder="Password"
          autocomplete="current-password"
        />
        {errors.password?.message && (
          <ErrorText>{errors.password.message}</ErrorText>
        )}
      </div>
      <Button type="submit" className={styles.Button}>
        Log In
      </Button>
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={() => dispatch(openRegistrModal())}>
          Sign Up
        </button>
      </p>
    </form>
  )
}

export default AuthLogin
