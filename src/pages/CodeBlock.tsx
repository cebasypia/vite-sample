import { css } from '@emotion/react';

import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock: CodeComponent = ({ inline = false, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  // Get a language and a file name from '```js:filename.js'
  const match = /language-(\w+)(:(.+))?/.exec(className ?? '');
  const lang = match?.[1] ?? '';
  const filename = match?.[3] ?? undefined;

  return (
    <SyntaxHighlighter
      style={materialDark}
      language={lang}
      wrapLines={true}
      showLineNumbers={true}
      lineNumberStyle={{ display: 'none' }}
      data-filename={filename}
      customStyle={filename != null ? { paddingTop: '2.5rem' } : {}}
      css={fileNameStyles}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

const fileNameStyles = css`
  position: relative;

  &[data-filename]::before {
    content: attr(data-filename);
    position: absolute;
    background-color: rgba(10, 10, 10, 0.5);
    bottom: calc(100% - 2rem);
    left: 0;
    height: 1.5rem;
    padding: 0.25rem 0.5rem;
    border-bottom-right-radius: 0.25rem;
  }
`;
