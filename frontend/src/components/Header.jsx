import { Flex, useColorMode } from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex onClick={toggleColorMode} justifyContent={"center"} mt={6} mb={12}>
      {colorMode === "light" ? (
        <MdLightMode size={25} />
      ) : (
        <MdLightMode size={25} />
      )}
    </Flex>
  );
};

export default Header;
