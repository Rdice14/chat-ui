import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

var lastUserText = "";
var lastUserPrefixFromBot = "";

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const [revealInsult, setRevealInsult] = useState(false);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = async () => {
	if (!inputMessage.trim().length) {
		return;
	}
	const data = inputMessage;
	lastUserText = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data, insult: false }]);
	setInputMessage("");

	const responeData = await fetch("localhost:9000/get-response", {
		method: "POST",
		body: {
			"text": data
		}
	});

	const responseJson = responeData.json();
	lastUserPrefixFromBot = responeData["user_input_category"];

	setTimeout(() => {
  	setMessages((old) => [...old, { from: "computer", text: responseJson["chatbot_response"], insult: false }]);
	}, 1000);
  };

  const handleInsultCreation = async () => {
	setRevealInsult(true);
	lastUserText = lastUserText.toLowerCase();
	lastUserText = lastUserText.replace("you", "i");
	lastUserText = lastUserText.replace("are", "am");
	const responeData = await fetch("localhost:9000/get-insult", {
		method: "POST",
		body: {
			text: lastUserText,
			prefix: lastUserPrefixFromBot
		}
	});
	insultData = responeData.json()
	setTimeout(() => {
		setMessages((old) => [...old, { from: "computer", text: "foo", isInsult: true, responses: ["foo", "doo", "boo"] }]);
	  }, 10);
	  setTimeout(() => {
		setMessages((old) => [...old, { from: "computer", text: "foo", isInsult: false, responses: ["foo", "doo", "boo"], isResponse: true }]);
	  }, 11);
  }

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
    	<Header 
		handleInsultCreation={handleInsultCreation}/>
    	<Divider />
    	<Messages messages={messages} />
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