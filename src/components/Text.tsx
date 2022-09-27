import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** por defecto: 'No hay texto' */
  children?: ReactChild;
  label?: string | number
}

// No utilice tipos fuera de un módulo de exportación predeterminado o Storybook Docs se verá afectado.
export const Text: FC<Props> = ({ children, style, label }) => {
  return <div style={style || {color: 'blue'}}>{children || label || `No hay texto`}</div>
}
