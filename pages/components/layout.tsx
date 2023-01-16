import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export default function Layout({children}: Props){
  return (
    <div className="main-wrapper">
      {children}
    </div>
  )
}