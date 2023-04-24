import Image from 'next/image'
import React from 'react'
import profile from '@/assets/images/profile.png'
import styles from './Header.module.css'

export default function UserInfo() {
  return (
    <div className={styles.user_wrapper}>
        <div className={`${styles.user_info} d-none d-md-flex`}>
            <b>Thaila Naga</b>
            <span>Premium</span>
        </div>
        <div className={styles.img_wrapper}>
            <Image src={profile} alt="profile pic" />
        </div>
    </div>
  )
}
