import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import openai from './Openai';
import { useState } from 'react';

function ChatGpt() {
  const [prompt, setPromprt] = useState('');
  const [res, setRes] = useState('');
  const handlePromptChange = e => {
    setPromprt(e.target.value);
  };
  const handleSubmit = async () => {
    const result = await openai(prompt);
    setRes(result);
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
        <Text color={'white'}>{res}</Text>
      </VStack>
    </Box>
  );
}

export default ChatGpt;
