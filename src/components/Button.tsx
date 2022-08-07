import React from 'react'

export interface ButtonProps {
  primary?: boolean

  label: string

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ onClick, label, primary = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'text-sm py-2 px-4 rounded shadow-lg shadow-slate-200',
        primary ? 'bg-primary-300 hover:bg-primary-200' : 'bg-secondary-300 hover:bg-secondary-200',
        primary ? 'text-slate-800' : 'text-slate-100',
      ].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
