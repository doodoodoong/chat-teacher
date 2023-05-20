const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.timeout = 30000;
app.post('/upload', (req, res) => {
  axios
    .post(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
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

app.post('/add-to-notion', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.notion.com/v1/pages',
      {
        parent: { database_id: `${process.env.NOTION_DATABASE_ID}` },
        properties: {
          Name: {
            title: [
              {
                type: 'text',
                text: {
                  content: req.body.text,
                },
              },
            ],
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2021-08-16',
        },
      }
    );
    res.json({
      message: 'Page created successfully.',
      pageId: response.data.id,
    });
  } catch (error) {
    console.error('Error creating page: ', error);
    res.status(500).json({ error: 'Error calling Notion API' });
  }
});
app.listen(3001, () => console.log('Server started on port 3001'));
