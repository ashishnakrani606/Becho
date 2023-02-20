import React from 'react'

const InputContent = ({children, title, className}) => {
  return (
    <div className={`bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-4 px-5 mb-3 break-words ${className}`}>
        <h4 className='text-black/40 dark:text-white/40 capitalize text-xs mb-1'>{title}</h4>
        {children}
    </div>
  )
}
export default InputContent
