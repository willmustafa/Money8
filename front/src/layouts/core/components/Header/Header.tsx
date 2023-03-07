import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css'
import { useDispatch } from 'react-redux';
import { toggleSidebarState } from '@/store/sidebar.slice';
import MonthPicker from './_MonthPicker';
import UserInfo from './_UserInfo';

export default function Header() {
    const dispatch = useDispatch()

  return (
    <header className={styles.header}>
        <div className='col-4'>
            <FontAwesomeIcon icon={["fas", 'align-left']} onClick={() => dispatch(toggleSidebarState())} />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <MonthPicker />
        </div>
        <div className='col-4 d-flex justify-content-end'>
          <UserInfo />
        </div>
    </header>
  )
}