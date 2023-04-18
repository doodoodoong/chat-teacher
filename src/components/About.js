import { ChevronDownIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BiSupport } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';

function About() {
  return (
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
          <MenuItem>
            <Avatar name="Kim" src="/assets/teacher.jpg" size={'xs'} />
            <Text ml={'1'}>About me</Text>
          </MenuItem>
          <MenuItem>
            <EmailIcon ml={'1'} />
            <Text ml={'1.5'}>Contact Me</Text>
          </MenuItem>
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
  );
}

export default About;
