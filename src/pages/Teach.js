import { Box, Text, Textarea } from '@chakra-ui/react';
import Subjectinput from '../components/SubjectInput';
import ChatGpt from '../components/ChatGpt';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Teach() {
  const [sub, setSub] = useState(false);
  const chat1 = '어떤 과목에 대해 알고 싶나요?';
  const subjectSelect = '수학, 사회 중 하나를 골라주세요.';

  const handleSubSelect = sub => {
    if (sub !== null) {
      setSub(true);
    } else {
      setSub(false);
    }
  };

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
        <Subjectinput onSubSelect={handleSubSelect} />
        {sub === true ? <ChatGpt /> : null}
      </Box>
    </>
  );
}

export default Teach;
