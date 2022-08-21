import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import githubMarkdownCss from '@/assets/github-markdown-css';

import CodeBlock from '@/pages/CodeBlock';

import useGetMdJson from '@/hooks/useGetMdJson';

const MarkDown = (): JSX.Element => {
  const components = {
    code: CodeBlock,
  };

  const mdJson = useGetMdJson('http://127.0.0.1:8080/markdown');

  return (
    <>
      <article css={githubMarkdownCss}>
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {mdJson?.body ?? ''}
        </ReactMarkdown>
      </article>
    </>
  );
};

export default MarkDown;
