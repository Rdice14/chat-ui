import React from "react";
import { Flex, Avatar, AvatarBadge, Text, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure } from "@chakra-ui/react";

const Header = ({handleInsultCreation}) => {
	const {isOpen, onOpen, onClose} = useDisclosure();
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
		</Flex>
			<Flex flexDirection="column" justify="right">
				<Button colorScheme='red' onClick={onOpen}>Get insult</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Insult Cofirmation</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text>Are you sure you want to reveal insult?</Text>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme='red' mr={3} onClick={handleInsultCreation}> Yes
							</Button>
							<Button colorScheme='blue' onClick={onClose}> No </Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Flex>
		</Flex>
	);
};

export default Header;