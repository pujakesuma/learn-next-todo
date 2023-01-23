import * as React from 'react';
import styles from '../../styles/Layout.module.css'

type Props = {
  children?: React.ReactNode
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles['main-wrapper']}>
      {children}
    </div>
  )
}