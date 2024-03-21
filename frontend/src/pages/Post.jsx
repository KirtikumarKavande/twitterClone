import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
// import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src={"https://bit.ly/dan-abramov"}
            size={"md"}
            name="Mark Zuckerberg"
          />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              kirtikumar
            </Text>
            <Image src="/img/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            1y ago
          </Text>
        </Flex>
      </Flex>

      <Text my={3}>Plz like my post</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"../../public/img/post1.png"} w={"full"} />
      </Box>

      {/* <Flex gap={3} my={3}>
				<Actions post={currentPost} />
			</Flex> */}

      <Flex gap={3} my={1} onClick={(e) => e.preventDefault()}>
        <Box>
          <CiHeart size={28} />
        </Box>
        <Box>
          <FaComment size={25} />
        </Box>
        <Box>
          <IoIosSend size={27} />
        </Box>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

export default PostPage;
