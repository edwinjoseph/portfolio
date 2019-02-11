import React from 'react';

export default function Page(props: any) {
  return (
    <div className='page'>
      {props.children}
    </div>
  );
}
