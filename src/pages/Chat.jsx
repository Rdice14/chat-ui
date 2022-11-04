import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Insult from "../components/Insult";
import Messages from "../components/Messages";

let intentHistory = []
let insultData = []

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const [revealInsult, setRevealInsult] = useState(false);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = async () => {
	if (!inputMessage.trim().length) {
		return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data }]);
	setInputMessage("");

	const responeData = await fetch("localhost:9000/get-response", {
		method: "POST",
		body: {
			"text": data
		}
	});

	const responseJson = responeData.json();
	intentHistory.push(responseJson);

	setTimeout(() => {
  	setMessages((old) => [...old, { from: "computer", text: responseJson["text"] }]);
	}, 1000);
  };

  const handleInsultCreation = async (responseHistory) => {
	setRevealInsult(true);
	const responeData = await fetch("localhost:9000/get-insult", {
		method: "POST",
		body: {
			data: responseHistory
		}
	})
	insultData = responeData.json()
  }

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
    	<Header 
		insultFunction={handleInsultCreation}/>
    	<Divider />
    	<Messages messages={messages} />
    	{revealInsult &&
			<Insult data={"foo"}/> //change to insultData
		}
		<Divider />
    	<Footer
      	inputMessage={inputMessage}
      	setInputMessage={setInputMessage}
      	handleSendMessage={handleSendMessage}
		isDisabled={revealInsult}
    	/>
  	</Flex>
	</Flex>
  );
};

export default Chat;