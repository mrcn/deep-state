import Router from 'next/router';
import React, {useEffect, useRef, useState} from 'react';

const endpoint = 'http://localhost:1337/todos'

export default () => {
  const titleRef = useRef;
  const jwtRef = useRef;
  const [todos, setTodos] = useState([]);

  //what is useEffect in react?
  useEffect(() => {
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
      Router.push('/login');
    }
    jwtRef.current = jwt;
  }, []);

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column", width: 200}}>
        <input type="text" placeholder="tile" />

        <button onClick={() => createTodo()}>Create todo</button>
      </div>

      <div>
        <h2> todos </h2>
        <pre> {JSON.stringify(todos)} </pre>

      </div>
    </div>
  )
}
// what is stringify
