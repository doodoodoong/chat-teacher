import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import ChatGpt from '../components/ChatGpt';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

function Teach() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [agreed, setAgreed] = useState(false);
  const chat1 = '모르는 수학문제가 있나요?';
  const subjectSelect = '문제를 적어서 제출하거나 사진을 찍어 올려주세요';

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleAgree = () => {
    setAgreed(true);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>경고</ModalHeader>
          <ModalBody>
            Chat-teacher가 알려주는 내용은 정답이 아닐 수 있습니다. 공부하는데
            참고로만 활용하시기 바랍니다.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={'blue'} onClick={handleAgree}>
              Agree
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {agreed && (
        <Box w={'100%'} h={'100vh'} bgColor={'black'} position={'relative'}>
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
      )}
    </>
  );
}

export default Teach;
