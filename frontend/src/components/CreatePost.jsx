import { AddIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position={"fixed"}
        bottom={10}
        right={5}
        bg={useColorModeValue("gray.300", "gray.dark")}
        onClick={onOpen}
        size={{ base: "sm", sm: "md" }}
      >
        <AddIcon />
      </Button>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CreatePost;
