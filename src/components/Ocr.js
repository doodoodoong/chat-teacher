import { useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function Ocr() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabord = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        axios
          .post('http://localhost:3001/upload', {
            image: binaryStr.split(',')[1],
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here.</p>
    </div>
  );
}

export default Ocr;
