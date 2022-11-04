import { Tabs, Tab, Text, TabList } from "@chakra-ui/react";

const Insult = ({ data }) => {
    const responseList = ["foo", "doo", "dee", "foo", "doo", "dee", "foo", "doo", "dee", "foo", "doo", "dee", "foo", "doo", "dee"] //change to data respond
    const responseTabs = responseList.map((response) => 
        <Tab>response</Tab>
    )
    return (
    <Text fontSize="lg" fontWeight="bold">
        You can respond with: 
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList overflowX="scroll"> 
                {responseTabs}
            </TabList>
        </Tabs>
    </Text>);
}

export default Insult;