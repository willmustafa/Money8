import { IColor } from '@/layouts/core/dtos/IColor';
import React from 'react'
import styles from './IconRound.module.css'

export interface IIconRound {
    children?: React.ReactNode;
    color?: IColor
  }

export default function IconRound(props: IIconRound) {
    const getClasses = () => {
        let classes = `${styles.iconRound} `;
        if (props.color) classes += styles[`iconRound-${props.color}`];
        return classes;
      };

  return (
    <span className={getClasses()}>{props.children}</span>
  )
}
