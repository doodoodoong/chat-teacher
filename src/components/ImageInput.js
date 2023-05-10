import { Button, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import callOcr from './Ocr';

function ImageInput() {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (file) {
      const ocrResult = await callOcr(file);
      console.log(ocrResult);
    }
  };

  return (
    <>
      <Input
        type={'file'}
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button onClick={handleUploadClick}>Upload Image</Button>
    </>
  );
}

export default ImageInput;
