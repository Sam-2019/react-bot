import { Chatbot } from "react-chatbot-kit";
import "./App.css";

import Config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProviderDocs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={Config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
