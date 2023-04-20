import { ChevronDownIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiSupport } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';

function About() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          bg={'whiteAlpha.500'}
          _hover={{ transform: 'scale(1.2)' }}
          rightIcon={<ChevronDownIcon />}
          transition={'all 0.2s'}
          _active={{ bg: 'gray.700' }}
        >
          <Text fontSize={'2xl'}>Profile</Text>
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem onClick={onOpen1}>
              <Avatar name="Kim" src="/assets/teacher.jpg" size={'xs'} />
              <Text ml={'1'}>About me</Text>
            </MenuItem>
            <Modal isOpen={isOpen1} onClose={onClose1}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>About me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Card border={'none'}>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing={'4'}>
                        <Box>
                          <Heading size={'xs'} textTransform={'uppercase'}>
                            My Job
                          </Heading>
                          <Text pt={'2'} fontSize={'sm'}>
                            Elementary School Teacher
                          </Text>
                        </Box>
                        <Box>
                          <Heading size={'xs'} textTransform={'uppercase'}>
                            My Name
                          </Heading>
                          <Text pt={'2'} fontSize={'sm'}>
                            DooDooDOoDooDOoDooDoong
                          </Text>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="gray" mr={3} onClick={onClose1}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <MenuItem onClick={onOpen2}>
              <EmailIcon ml={'1'} />
              <Text ml={'1.5'}>Contact Me</Text>
            </MenuItem>
            <Modal isOpen={isOpen2} onClose={onClose2}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Contact Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Card>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing={'4'}>
                        <Box>
                          <Heading size={'xs'} textTransform={'uppercase'}>
                            Phone Number
                          </Heading>
                          <Text pt={'2'} fontSize={'sm'}>
                            010-1111-2222
                          </Text>
                        </Box>
                        <Box>
                          <Heading size={'xs'} textTransform={'uppercase'}>
                            E-mail
                          </Heading>
                          <Text pt={'2'} fontSize={'sm'}>
                            abcd1234@gmail.com
                          </Text>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="gray" mr={'3'} onClick={onClose2}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>
                <Icon as={BiSupport} size={'xs'} />
                <Text ml={'1'}>Suggest</Text>
              </MenuItem>
              <MenuItem>
                <Icon as={BiHelpCircle} />
                <Text ml={'1'}>Help</Text>
              </MenuItem>
            </MenuGroup>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export default About;
