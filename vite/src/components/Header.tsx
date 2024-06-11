import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FC } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header: FC = () => {
  return (
    <Flex h={20} justifyContent="space-between" alignItems="center" px={4}>
      <Flex w={40} fontSize={20} fontWeight="semibold" textColor="blue">
        🌊 Under the SEA
      </Flex>
      <Flex display={["none", "none", "flex"]} gap={8}>
        <Button variant="link" colorScheme="blue">
          Home
        </Button>
        <Button variant="link" colorScheme="blue">
          Mint
        </Button>
        <Button variant="link" colorScheme="blue">
          Sale
        </Button>
      </Flex>
      <Flex w={40} justifyContent="end" display={["none", "none", "flex"]}>
        <Button colorScheme="blue">🦊 Login</Button>
      </Flex>
      <Flex display={["flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            colorScheme="blue"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>🦊 Login</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Mint</MenuItem>
            <MenuItem>Sale</MenuItem>
            <MenuItem>🦊 Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
