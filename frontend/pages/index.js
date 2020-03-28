import Router from 'next/router';
import React, {useRef, useState} from 'react';

export default () => {
  //what is useEffect in react?
  useEffect(() => {
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
      Router.push('/login');
    }
  }, []);
}