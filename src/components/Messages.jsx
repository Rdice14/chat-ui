import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import Custom from "./Custom";
import Skeleton from "react-loading-skeleton";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView());
	return <div ref={elementRef} />;
  };

  return (
	<Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
  	{messages.map((item, index) => {
    	if (item.from === "me") {
			return (
				<Flex key={index} w="100%" justify="flex-end">
				<Flex
					bg="black"
					color="white"
					minW="100px"
					maxW="350px"
					my="1"
					p="3"
					borderRadius="8px"
				>
					<Text>{item.text}</Text>
				</Flex>
				</Flex>
			);
    	} else if (item.isCustom) { 
			return (<Custom text={item.text} index={index} model={item.from} isInsult={item.isInsult} />);
		} else {
			return (
				<Flex key={index} w="100%">
				<Avatar
					name="The bot"
					src={modelAvatar[item.from]}
					bg="blue.300"
				></Avatar>
					<Skeleton count={3}>
						<Flex
							bg="gray.100"
							color="black"
							minW="100px"
							maxW="350px"
							my="1"
							p="3"
							borderRadius="8px"
						>
							<Text>{item.text}</Text>
						</Flex>
					</Skeleton>
				</Flex>
			);
    	}
  	})}
  	<AlwaysScrollToBottom />
	</Flex>
  );
};

export default Messages;