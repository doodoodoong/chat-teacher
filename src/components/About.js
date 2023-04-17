import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

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
          <MenuItem>About me</MenuItem>
          <MenuItem>Contact Me</MenuItem>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Suggest</MenuItem>
            <MenuItem>Help</MenuItem>
          </MenuGroup>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default About;
