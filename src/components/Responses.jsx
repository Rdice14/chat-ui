import { Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Responses = ({ responseList, index }) => {
    
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
                    <Text>You can respond with: 
                    <List>
                        {responseList.length > 0 && responseList.map((help) => 
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            {help}
                        </ListItem>)}
                    </List>
                    </Text>
                </Flex>
        	</Flex>);
}

export default Responses