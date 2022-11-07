import { Avatar, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Insult = ({ text, index }) => {
    const firstFieldRef = React.useRef(null)
    
    return (<Flex key={index} w="100%">
          	<Avatar
            	name="Computer"
            	src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
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
            	<Text>{text}</Text>
          	</Flex>
        	</Flex>);
}

export default Insult;