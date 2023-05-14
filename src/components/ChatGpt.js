import {
  Box,
  Button,
  Flex,
  Input,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import openai from './Openai';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

function ChatGpt() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [res, setRes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        axios
          .post('http://localhost:3001/upload', {
            image: binaryStr.split(',')[1],
          })
          .then(response => {
            console.log(response.data.responses[0].fullTextAnnotation.text);
            setPrompt(response.data.responses[0].fullTextAnnotation.text);
          })
          .catch(err => {
            console.log(err);
          });
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const handlePromptChange = e => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    navigate('/loading');
    const result = await openai(prompt);
    setRes(result);
    setIsLoading(false);
    navigate('/response', { state: { response: result } });
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your prompt"
          color={'white'}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Flex justifyContent={'center'}>
          <Box {...getRootProps()}>
            <Input {...getInputProps()} />
            <Text
              border={'2px'}
              borderRadius={'lg'}
              padding={'20px'}
              fontFamily={'mono'}
              fontSize={'4xl'}
              margin={'20px'}
              color={'white'}
            >
              Drag & Drop Your Capture File or CLICK!
            </Text>
          </Box>
        </Flex>
        {isLoading ? (
          <Box display={'flex'}>
            <Spinner size={'xl'} color={'white'} />
            <Flex
              marginLeft={'3px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Text
                fontFamily={'mono'}
                fontSize={'2xl'}
                textAlign={'center'}
                color={'white'}
              >
                Thinking
              </Text>
            </Flex>
          </Box>
        ) : null}
      </VStack>
    </Box>
  );
}

export default ChatGpt;
