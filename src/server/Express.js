const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json({ limit: '50mb' }));

app.post('/upload', (req, res) => {
  axios
    .post(
      'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDaEonQ1qIZwsBpHyzu_p9MV5Pyl55k2DI',
      {
        requests: [
          {
            image: {
              content: req.body.image,
            },
            features: [
              {
                type: 'TEXT_DETECTION',
              },
            ],
          },
        ],
      }
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Error calling Vision API' });
    });
});

app.listen(3001, () => console.log('Server started on port 3001'));
