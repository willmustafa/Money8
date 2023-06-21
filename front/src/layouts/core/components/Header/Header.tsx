import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css'
import MonthPicker from './_MonthPicker';
import UserInfo from './_UserInfo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="col-4"></div>
        <div className='col-4 d-flex justify-content-center'>
          <MonthPicker />
        </div>
        <div className='col-4 d-flex justify-content-end'>
          <UserInfo />
        </div>
    </header>
  )
}