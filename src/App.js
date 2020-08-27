import React from "react";
import "./styles.css";
import CodeSnippet from "./CodeSnippet";

export default function App() {
  const code = '{ "message" : "Hola" }';
  const code2 = `
  {
    "AccountName" : "<Replace with your API Account credentials>",
    "Password" : "<Replace with your API Account credentials>",
    "TransactionID" : "SCQD-CGZT-BRVS-6KE2-VANB-Q9ZB-D5GJ"
  }
  `;

  return (
    <div className="App">
      <CodeSnippet code={code} language="json" editable={false} />
      <CodeSnippet code={code2} language="json" editable={true} />
    </div>
  );
}
