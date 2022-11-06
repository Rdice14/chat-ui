import { InfoIcon } from "@chakra-ui/icons";
import FocusLock from 'react-focus-lock';
import { MdCheckCircle } from "react-icons/md";
import { Avatar, Flex, IconButton, List, ListIcon, ListItem, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

const Insult = ({ text, index }) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
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
			<Flex>
				<Popover
					isOpen={isOpen}
					initialFocusRef={firstFieldRef}
					onOpen={onOpen}
					onClose={onClose}
					placement='right'
					closeOnBlur={false}
				>
					<PopoverTrigger>
						<IconButton size='sm' icon={<InfoIcon />} />
					</PopoverTrigger>
					<PopoverContent p={5}>
					<FocusLock returnFocus persistentFocus={false}>
						<PopoverArrow />
						<PopoverCloseButton />
						<List spacing={3}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Assumenda, quia temporibus eveniet a libero incidunt suscipit
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
							</ListItem>
						</List>
					</FocusLock>
				</PopoverContent>
			</Popover>
			</Flex>
        	</Flex>);
}

export default Insult;