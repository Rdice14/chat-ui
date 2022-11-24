import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Custom = ({ text, index, model, isInsult }) => {

	
	
	const modelAvatar = {
		"gpt-2": "https://res.cloudinary.com/apideck/image/upload/v1615960059/icons/gpt-2.png",
		"bert": "https://pbs.twimg.com/profile_images/1092453930401968129/xn0CkJT6_400x400.jpg",
		"bart": "https://media.entertainmentearth.com/assets/images/3e36d0664eae4a4bb38eb21bbcacdaf1xl.jpg",
	}

    const botResponse = text;
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