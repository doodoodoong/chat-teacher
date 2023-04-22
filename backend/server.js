const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: prompt,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Error calling ChatGPT API:', err.message);
    console.error('Error details:', err.response?.data);
  }
});

app.listen(port, () => {
  console.log(`Sever listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Server is Running!');
});
