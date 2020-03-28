import Router from 'next/router';
import React, {useEffect} from 'react';

export default () => {
  //what is useEffect in react?
  useEffect(() => {
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
      Router.push('/login');
    }
  }, []);
  return (
    <div style={{display: "flex", flexDirection: "column", width: 200}}>
      <input type="text" placeholder="tile" />

      <button>Create todo</button>
    </div>
  )
}