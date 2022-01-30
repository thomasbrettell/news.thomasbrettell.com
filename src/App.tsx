import React, { useEffect, useState } from 'react';
import client from './contentful/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function App() {
  const [content, setContent] = useState<any>('')

  useEffect(() => {
    client.getEntry('2C2Y9loHDESKBQowKbULcR').then((data: any) => {
      setContent(data.fields.content)
    })
  }, [])
  
  return (
    <main>
      {documentToReactComponents(content)}
    </main>
  );
}

export default App;
