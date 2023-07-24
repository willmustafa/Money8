import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Close.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface CloseButton {
    onClick: () => void
}

export default function Close({onClick}: CloseButton) {
  return (
    <div className={styles.circle} onClick={onClick}>
    <FontAwesomeIcon icon={faTimes} className={styles.icon} />
  </div>
  )
}
