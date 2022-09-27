import React, { HTMLAttributes, useEffect, useState } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: string | number
  type?: 'default' | 'link'
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ style, label, type, disabled, onClick }: Props) => {
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive && !disabled)
            setTimeout(() => {
                setIsActive(false)
            }, 500)
    },[isActive])

  return <button 
    onMouseEnter={() => !disabled && setIsHover(true)}
    onMouseLeave={() => !disabled && setIsHover(false)}
    onMouseDown={() => !disabled && setIsActive(true)}
    onClick={e => {
        e.preventDefault()
        !disabled && onClick && onClick()
    }}
    style={ style 
        || type === 'link' ? {
            color: disabled ? 'gray' : isActive ? 'red' : 'blue',
            backgroundColor: 'transparent',
            cursor: disabled ? 'no-drop' : isHover ? 'pointer' : 'default',
            padding: '10px',
            border: 'none',
            height: '40px',
        }:{
            color: 'white',
            backgroundColor: disabled ? 'gray' : isActive ? 'gray' : (isHover ? 'red' : 'black'),
            cursor: disabled ? 'no-drop' : (isHover ? 'pointer' : 'default'),
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid white',
            transition: '.5s',
            height: '40px',
        }}>
            {label}
        </button>
}
