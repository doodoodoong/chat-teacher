import axios from 'axios';

const openai = async prompt => {
  const res = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 256,
      temperature: 0.7,
      top_p: 1,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    }
  );
  console.log(res);
  return res.data.choices[0].text.trim();
};

export default openai;
