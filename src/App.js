import React from "react";
import "./styles.css";
import CodeSnippet from "./CodeSnippet";

export default function App() {
  const code = '{ \n  "message" : "Hola" \n}';
  const code2 = `
  {
    "AccountName" : "<Replace with your API Account credentials>",
    "Password" : "<Replace with your API Account credentials>",
    "TransactionID" : "SCQD-CGZT-BRVS-6KE2-VANB-Q9ZB-D5GJ"
  }
  `;

  return (
    <div className="App">
      <h2>Static code snippet</h2>
      <CodeSnippet code={code} language="json" editable={false} />
      <h2>Editable code snippets</h2>
      <CodeSnippet code={code} language="json" editable={true} />
      <br />
      <CodeSnippet code={code2} language="json" editable={true} />
    </div>
  );
}
