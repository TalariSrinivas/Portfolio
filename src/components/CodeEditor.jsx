import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Monaco Editor */}
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        className="flex-grow"
      />
    </div>
  );
};

export default CodeEditor;
