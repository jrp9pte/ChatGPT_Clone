import logo from './logo.svg';
import './App.css';
import Chat from './Chat'

function App() {
 
    return (
    <div>
      <div
      style={{
        backgroundColor: '#f1f1f1',
        padding: '5vw',
        textAlign: 'center',
      }}
      >
        <h1
          style={{
            fontSize: '5vw',
            color: '#333',
            margin: 0,
          }}
        > ChatGPT Clone </h1>
        <p
          style={{
            fontSize: '3vw',
            color: '#666',
            margin: '2vw 0 0',
            marginBottom: "2REM"
          }}
        >Ask an AI-powered chatbot Anything!</p>
    </div>
    <Chat></Chat>/
  </div> 
  );
  
}

export default App;



