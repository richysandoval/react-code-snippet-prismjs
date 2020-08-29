import React from "react";
import "./styles.css";
import CodeSnippet from "./CodeSnippet";

export default function App() {
  const code = '{\n  "message" : "Hola"\n}';

  return (
    <div className="App">
      <h3>Non Editable Snippet</h3>
      <CodeSnippet code={code} language="json" editable={false} />
      <h3>Editable Snippet</h3>
      <CodeSnippet code={code} language="json" editable={true} />
    </div>
  );
}
