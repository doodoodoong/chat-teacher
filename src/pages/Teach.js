import { Box } from '@chakra-ui/react';
import ChatGpt from '../components/ChatGpt';
import { TypeAnimation } from 'react-type-animation';

function Teach() {
  const chat1 = '모르는 수학문제가 있나요?';
  const subjectSelect = '문제를 적어서 제출하거나 사진을 찍어 올려주세요';

  return (
    <>
      <Box w={'100vw'} h={'100vh'} bgColor={'black'} position={'relative'}>
        <TypeAnimation
          sequence={[`${chat1}\n ${subjectSelect}`, 5000]}
          wrapper="div"
          cursor={true}
          style={{
            whiteSpace: 'pre-line',
            fontSize: '4em',
            display: 'inline-block',
            fontFamily: 'NeoDunggeunmoPro-Regular',
            margin: 20,
            color: 'white',
          }}
        />
        <ChatGpt />
      </Box>
    </>
  );
}

export default Teach;
