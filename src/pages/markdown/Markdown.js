import React from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useLocalStorage from '../../hooks/useLocalStorage';

const Component = ({ value, language }) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={docco}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
};

const Markdown = () => {
    const initialMd = '# Write some md here ...'
    const [ input, setInput ] = useLocalStorage('md', initialMd)

    return (
        <>        
        <div className="container">  
            <textarea 
                value={input} 
                className="textarea" 
                onChange={(e) => setInput(e.target.value)}
            />
            <ReactMarkdown source={input} className="Markdown" renderers={{
                code: Component
            }}
            />
        </div>
        </>
    )
    
}




export default Markdown;