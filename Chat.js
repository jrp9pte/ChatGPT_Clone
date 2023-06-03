import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const post = () => {
    axios.post('http://localhost:9000/chat', {
      prompt: prompt,
    })
      .then((res) => {
        console.log(res)
        console.log("response")
        const generatedText = res.data.choices[0].text;
        setResponse(generatedText);
        setErrorMessage('');
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          const error = err.response.data.error;
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An error occurred, please check OpenAI API');
        }
      });
  };

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post();
  };

  return (<>
    <div style={{ display: "flex", justifyContent: "center" , margin:"1REM"}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      </div>
      <br></br>
      <div style={{ margin: "1REM", display: "flex", justifyContent: "center" }}> {errorMessage && errorMessage} </div>
      <div style={{ margin: "3REM", display: "flex", justifyContent: "center" }}> {response} </div>
    </>
  );
}

export default Chat;
