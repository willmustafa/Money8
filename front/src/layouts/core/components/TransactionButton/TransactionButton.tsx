import React, { MouseEventHandler } from 'react'
import styles from './TransactionButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ITransactionButton {
    onClick: MouseEventHandler;
}

export default function TransactionButton(props: ITransactionButton) {
  return (
    <div className={styles.transactionWrapper} onClick={props.onClick}>
        <FontAwesomeIcon icon={["fas", "plus"]} />
    </div>
  )
}
