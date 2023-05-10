import axios from 'axios';

async function callOcr(imageFile) {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(
      '/custom/v1/22358/bf98859f1d4d4a9769d6e5bba414f6338aca7c2bb993a665d6e7e21c19dcb9ee/general',
      formData,
      {
        headers: {
          'X-OCR-SECRET': 'ck5ubENsck9tZmhsVGFQcXhwWUd1ck5WSnVVT3ZoZFU=',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('error messeage', error);
  }
}

export default callOcr;
