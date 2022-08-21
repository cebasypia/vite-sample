import Markdown from '@/types/Markdown';
import { useState, useEffect } from 'react';

const useGetMdJson = (url: string): Markdown | undefined => {
  const [mdJson, setMdJson] = useState<Markdown>();

  useEffect(() => {
    void (async () => {
      const res = await fetch(url, { method: 'GET' });
      const data = (await res.json()) as Markdown;
      console.log(data);
      setMdJson(data);
    })();
  }, []);

  return mdJson;
};

export default useGetMdJson;
