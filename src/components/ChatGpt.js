import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

function ChatGpt() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { sender: 'user', content: inputValue }]);
    setInputValue('');

    try {
      const response = await axios.post('/api/chat', {
        prompt: `Your custom prompt based on ${inputValue}`,
      });
      const gptRes = response.data.choices[0].text;
      setMessages([
        ...messages,
        { sender: 'user', content: inputValue },
        { sender: 'gpt', content: gptRes },
      ]);
    } catch (err) {
      console.error('Error calling ChatGPT API:', err);
    }
  };
  return (
    <VStack>
      <Box
        bg={'gray.100'}
        p={4}
        rounded={6}
        w={'100%'}
        h={'400px'}
        overflowY={'scroll'}
      >
        {messages.map((message, i) => (
          <HStack
            key={i}
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
          >
            <Box
              bg={message.sender === 'user' ? 'blue.500' : 'gray.300'}
              color={message.sender === 'user' ? 'white' : 'black'}
              p={2}
              rounded={6}
            >
              <Text>{message.content}</Text>
            </Box>
          </HStack>
        ))}
      </Box>
      <HStack w={'100%'}>
        <Input
          placeholder="메시지를 입력하세요"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={handleSendMessage} colorScheme="blue">
          전송
        </Button>
      </HStack>
    </VStack>
  );
}

export default ChatGpt;
