import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
function FadeInOutText({ text }) {
  return (
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
      <Text fontSize={'7xl'} color={'white'} fontFamily={'mono'}>
        {text}
      </Text>
    </Box>
  );
}

export default FadeInOutText;
