import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    if(!_.isEmpty(localStorage.getItem('todos'))) {
      const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

      setTodoState(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    if(!_.isEmpty(todoState)) {
      localStorage.setItem('todos', JSON.stringify(todoState));
    }
    setInputValue('');
  }, [todoState])

  const handleInputValue = event => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    if(!inputValue) return;

    const newTodo = {
      todoTitle: inputValue, 
      todoStatus: false
    };

    setTodoState(prevState => ([
      ...prevState,
      newTodo
    ]));

  }
 
  return (
    <div>
      <input value={inputValue} onChange={handleInputValue}/>
      <button onClick={handleClick}>ADICIONAR</button>
      { !_.isEmpty(todoState) ? todoState.map((todo, i) => (
        <div key={i} >
          <p>{todo.todoTitle}</p>
        </div>
      )) : (
        <p>Adicione seu primeiro todo :D</p>
      ) 
      }
    </div>
  )
};

export default TodoList;
