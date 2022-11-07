import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const responseList = [
    "Use humor.Humor serves three fundamental purposes after an insulting remark: it thwarts a mean-spirited insult, it lessens any animosity, and puts a potential audience in your corner.",
    "Walk away (avoidance). You can always choose to let the remark slide. Honestly, choosing to ignore an insult, whether light-hearted or mean-spirited, gives you a lot of power. It's like saying to the person, 'I don't find that comment worthy of my reaction'.",
    "Contact your parents or inform school. If the person continues to make insulting comments despite your urging him to stop, take your complaints to the next level. Reach out to a teacher, parent, supervisor, or other person in authority and tell them about the insulting remarks.",
    "Have a buddy system. In the mind of the person insulting, one person is easy to conquer—but a whole group is too much work. Hang out with your friends as much as possible. The more time you spend with others, the less likely people will insult you.",
    "Be proud of who you are. Build up your self-confidence to withstand insulting remarks. It's important to be proud of yourself and love yourself no matter what the people say",
    "Create an exit strategy. Know when to log off from the chat. If the person insulting is too much for you to handle, you can just walk away from the chat. This will prevent more insults to be hurled at you."
]

const modelAvatar = {
    "gpt-2": "https://res.cloudinary.com/apideck/image/upload/v1615960059/icons/gpt-2.png",
    "bert": "https://pbs.twimg.com/profile_images/1092453930401968129/xn0CkJT6_400x400.jpg",
    "bart": "https://media.entertainmentearth.com/assets/images/3e36d0664eae4a4bb38eb21bbcacdaf1xl.jpg",
}

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