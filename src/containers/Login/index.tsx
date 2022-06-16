import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import waves from 'assets/waves.png'
import logo from 'assets/logo.svg'
import { Alert, Label, TextInput } from './components'
import { usernameValidator, passwordValidator } from 'utils/validator'
import { getLocalStorage, setLocalStorage } from 'utils/storage'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isIncorrect, setIsIncorrect] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isIncorrect) setIsIncorrect(false)
    if (e.target.name === 'username') return setUsername(e.target.value)
    setPassword(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!(usernameValidator(username) && passwordValidator(password)))
      return setIsIncorrect(true)
    
    setLocalStorage.userToken(username+password)
    navigate('/', { replace: true })
  }

  if (getLocalStorage.userToken() !== '')
    return <Navigate to='/' replace />
  
  return (
    <div className='login-container relative flex justify-center items-center w-screen h-screen bg-primary'>
      <img 
        className='absolute top-4 left-4 w-80 object-contain'
        src={logo}
        alt='company logo' />

      <section className='px-20 py-16 rounded-lg w-[480px] bg-white z-10'> 
        <h1 className='font-body font-semibold text-[40px] text-txtPrimary text-center mb-2'>Welcome</h1>
        <p className='text-lg text-txtSecondary font-light text-center mb-5'>Log in to your CASEOS account!</p>
        
        {isIncorrect && <Alert /> }

        <form className='flex flex-col font-light' onSubmit={onSubmit}>
          <Label htmlFor='username' value='Email address' />
          <TextInput 
            id='username'
            type='text'
            name='username'
            placeholder='Type email here'
            value={username}
            onChange={onChange}
          />

          <Label htmlFor='password' value='Password' />
          <TextInput 
            id='password'
            type='password'
            name='password'
            placeholder='Minimum 8 characters'
            value={password}
            onChange={onChange}
          />

          <input
            className='px-4 py-3 bg-primary font-medium text-white text-body mt-4 cursor-pointer hover:opacity-80'
            type='submit'
            value='Log In' />
        </form>
      </section>
    </div>
  )
}

export default Login