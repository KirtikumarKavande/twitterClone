import { Avatar,  Flex, Text } from "@chakra-ui/react";

const Comment = () => {
	return (
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={"https://bit.ly/dan-abramov"} size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
						kirtikumarKavande
						</Text>
					</Flex>
					<Text>That is good</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Comment;
