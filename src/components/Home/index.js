import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import TodoList from '../TodoList'

const Home = () => {
  return (
    <div>
      <Header>
        <h1>ToDo List</h1>
      </Header>
      <TodoList/>
      <Footer/>
    </div>
  )
};

export default Home;
