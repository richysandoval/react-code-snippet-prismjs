import React from "react";
import "./styles.css";
import CodeSnippet from "./CodeSnippet";

export default function App() {
  const code = '{ "message" : "Hola" }';

  return (
    <div className="App">
      <CodeSnippet code={code} language="json" editable={false} />
      <CodeSnippet code={code} language="json" editable={true} />
    </div>
  );
}
