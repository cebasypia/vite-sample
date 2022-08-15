import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import { css } from '@emotion/react';

const styles = css({
  color: 'blue',
});

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p css={styles}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <h2>Welcome to React Router!</h2>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
};

const About = (): JSX.Element => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>{"That feels like an existential question, don't you think?"}</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};
