import React, {FC} from 'react'

const Wrapper: FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-[1200px] mx-auto px-2 md:px-10'>
        {children}
    </div>
  )
}

export default Wrapper