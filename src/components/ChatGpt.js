import { Box, Button, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import openai from './Openai';
import { useState } from 'react';

function ChatGpt() {
  const [prompt, setPromprt] = useState('');
  const [res, setRes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handlePromptChange = e => {
    setPromprt(e.target.value);
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
          <Spinner size={'xl'} color={'white'} />
        ) : (
          <Text color={'white'} fontFamily={'mono'}>
            {res}
          </Text>
        )}
      </VStack>
    </Box>
  );
}

export default ChatGpt;
