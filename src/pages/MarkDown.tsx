import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const styles = css({
  color: 'green',
});

const MarkDown = (): JSX.Element => {
  return (
    <>
      <main>
        <h2 css={styles}>MarkDown</h2>
        <p>{"That feels like an existential question, don't you think?"}</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};

export default MarkDown;
