import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const App = (): JSX.Element => {
  return (
    <div css={styles}>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/markdown'>MarkDown</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default App;

const styles = css`
  ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: unset;
  }

  li {
    margin-right: 1rem;
  }
`;
