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
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function ChatGpt() {
  const [prompt, setPrompt] = useState('');
  const [res, setRes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handlePromptChange = e => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const result = await openai(prompt);
    setRes(result);
    setIsLoading(false);
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
        ) : (
          <TypeAnimation
            sequence={[`${res}`, 4000]}
            cursor={true}
            style={{
              fontSize: '3em',
              fontFamily: 'NeoDunggeunmoPro-Regular',
              color: 'white',
            }}
          />
        )}
      </VStack>
    </Box>
  );
}

export default ChatGpt;
