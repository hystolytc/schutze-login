import { Navigate, useNavigate } from 'react-router-dom'
import { getLocalStorage, removeLocalStorage } from 'utils/storage'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    removeLocalStorage.userToken()
    navigate('/login', { replace: true })
  }

  if (getLocalStorage.userToken() === '')
    return <Navigate to='/login' replace />

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold text-primary mb-10'>This is your home page!</h1>
      <button
        className='px-4 py-3 bg-primary font-medium text-white text-body mt-4'
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  )
}

export default Home