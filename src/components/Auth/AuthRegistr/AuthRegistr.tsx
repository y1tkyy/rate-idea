import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './AuthRegistr.module.scss'
import { Button, ErrorText, Input } from '../..'
import { openLoginModal, useAppDispatch } from '../../../redux'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const requiredMessage = 'This field is required'

const AuthRegistr: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }

  return (
    <form className={styles.AuthRegistr} onSubmit={handleSubmit(onSubmit)}>
      <h4>Create An Account</h4>
      <div className={styles.field}>
        <label>Name</label>
        <div className={styles.twoFields}>
          <div className={styles.field}>
            <Input
              register={register('firstName', { required: requiredMessage })}
              placeholder="First Name"
              autocomplete="given-name"
            />
            {errors.firstName?.message && (
              <ErrorText>{errors.firstName.message}</ErrorText>
            )}
          </div>
          <div className={styles.field}>
            <Input
              register={register('lastName', { required: requiredMessage })}
              placeholder="Last Name"
              autocomplete="family-name"
            />
            {errors.lastName?.message && (
              <ErrorText>{errors.lastName.message}</ErrorText>
            )}
          </div>
        </div>
      </div>
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
          autocomplete="new-password"
        />
        {errors.password?.message && (
          <ErrorText>{errors.password.message}</ErrorText>
        )}
      </div>
      <div className={styles.field}>
        <label>Confirm Password</label>
        <Input
          register={register('confirmPassword', {
            required: requiredMessage,
            validate: val => {
              if (watch('password') != val) return 'Your passwords do no match'
            },
          })}
          type="password"
          placeholder="Confirm Password"
          autocomplete="off"
        />
        {errors.confirmPassword?.message && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}
      </div>
      <Button type="submit" className={styles.Button}>
        Create Account
      </Button>
      <p>
        Already Have An Account?{' '}
        <button type="button" onClick={() => dispatch(openLoginModal())}>
          Sign In
        </button>
      </p>
    </form>
  )
}

export default AuthRegistr
