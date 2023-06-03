const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(cors())

app.use(express.json());



app.post('/chat', async (req, res, next) => {
    console.log(req.body);
  
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: req.body.prompt,
        max_tokens: "100",
        temperature: 0
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.API_Key2
        }
      });
  
      console.log(response.data); // Process the response as needed
  
      if (response.data.error) {
        const errorMessage = response.data.error.message;
        console.log(errorMessage);
        res.status(400).send(errorMessage);
      } else {
        // Handle successful response
        res.send(response.data);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error`);
    }
  });





const PORT = process.env.Port || 9000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
} )

