import React from "react";
import { Flex, Avatar, AvatarBadge, Text, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure, Switch } from "@chakra-ui/react";

const Header = ({switchInsult, withInsult}) => {
	return (
		<Flex w="100%">
		<Avatar size="lg" name="ToughLove.exe" src="https://static.thenounproject.com/png/2195399-200.png">
			<AvatarBadge boxSize="1.25em" bg="green.500" />
		</Avatar>
		<Flex flexDirection="column" mx="5" mr="575" justify="center">
			<Text fontSize="lg" fontWeight="bold">
			ToughLove.exe
			</Text>
			<Text color="green.500">Online</Text>
			{/* <Switch colorScheme="green" size="md" id={withInsult}/> */}
			<Button colorScheme={withInsult ? "red" : "green"} size="md" onClick={switchInsult} > {withInsult ? "With insult" : "Without insult"}</Button>
		</Flex>
		{/* <Flex flexDirection="column" justify="right"> */}
		{/* </Flex> */}
		</Flex>
	);
};

export default Header;