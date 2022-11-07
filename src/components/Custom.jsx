import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Custom = ({ text, index, model, isInsult }) => {
    const botResponse = isInsult ? text : `${responseList[[Math.floor(Math.random()*responseList.length)]]}`;
	const [isActive, setIsActive] = useState(true);
    return (
		<>
			<Flex key={index} w="100%">
				<Avatar
					name={model}
					src={modelAvatar[model]}
					bg="blue.300"
				></Avatar>
				<Flex
					bg="gray.100"
					color="black"
					minW="100px"
					maxW="350px"
					my="1"
					p="3"
					borderRadius="8px"
				>
					<Text color={isActive ? "transparent" : "black"} textShadow={isActive ? "0 0 8px #000" : ""}>{botResponse}</Text>
				</Flex>
        	</Flex>
			<Button my="1" width="225" onClick={() => setIsActive(false)}> Click to reveal the message </Button>
		</>);
}

export default Custom;