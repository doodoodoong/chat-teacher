import { Box, Select, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Subjectinput({ onSubSelect }) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem('subject');
    if (storedValue) {
      setInputValue(storedValue);
      setSelected(true);
    }
  }, []);

  const handleInputChange = e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem('subject', newValue);
    onSubSelect(newValue);
    setSelected(true);
    console.log(inputValue);
  };
  return (
    <>
      <Box
        visibility={selected ? 'hidden' : 'visible'}
        as={motion.div}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        display={'flex'}
        justifyContent={'center'}
      >
        <Select
          variant={'outline'}
          borderColor={'white'}
          placeholder="수학, 사회 중 하나를 골라주세요"
          sx={{
            '::placeholder': {
              color: 'white',
            },
          }}
          htmlSize={50}
          width={'auto'}
          color={'white'}
          fontFamily={'mono'}
          onChange={handleInputChange}
        >
          <option value={'수학'}>수학</option>
          <option value={'사회'}>사회</option>
        </Select>
      </Box>
      <Box
        as={motion.div}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        display={'flex'}
        justifyContent={'center'}
      >
        <Text
          visibility={selected ? 'visible' : 'hidden'}
          color={'white'}
          fontFamily={'mono'}
          fontSize={'7xl'}
        >
          당신의 선택은 {inputValue}입니다.
        </Text>
      </Box>
    </>
  );
}

export default Subjectinput;
