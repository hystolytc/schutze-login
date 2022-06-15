import alert from 'assets/alert.svg'

export const Alert = () => (
  <div className='p-5 flex bg-danger rounded mb-8'>
    <div className='w-[26px] pt-1 mr-5'>
      <img className='object-contain' src={alert} alt='alert icon' />
    </div>
    <p className='font-light text-white'>
      <strong>Please try again</strong>. Your credential are wrong.
    </p>
  </div>
)
