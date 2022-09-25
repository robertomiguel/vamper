import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** por defecto: 'No hay pensamiento!!' */
  children?: ReactChild;
  label?: string | number
}

// No utilice tipos fuera de un módulo de exportación predeterminado o Storybook Docs se verá afectado.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = ({ children, style, label }) => {
  return <div style={style || {color: 'blue'}}>{children || label || `No hay pensamiento!!`}</div>
}
