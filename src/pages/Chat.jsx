import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const [revealInsult] = useState(false);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = async () => {
	if (!inputMessage.trim().length) {
		return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data, insult: false }]);
	setInputMessage("");

	const uri = `http://localhost:5000/get-response/${data}`;
	// const uri = `http://localhost:5000/?text="${data}"`;

	const responseData = await fetch(uri, {
		method: "GET",
		// headers: {
		// 	'Content-Type': 'application/json',
		// },
		// body: {
		// 	"text": data
		// }
	});

	// console.log(await responseData.json());

	const responseJson = await responseData.json();
	console.log(responseJson);
	const isInsult = responseJson["is_insult"];

	if (!isInsult) {
		setTimeout(() => {
		setMessages((old) => [...old, { from: "Kind Guy", text: responseJson["chatbot_response"], isCustom: false }]);
		}, 3);
	} else {
		const insultList = responseJson["insult_data"];
		insultList.forEach(insultData => {
			setTimeout(() => {
				setMessages((old) => [...old, { from: insultData["model"].toLowerCase(), text: insultData["insult"], isCustom: true, isInsult: true }]);
			  }, 3);
		});
		setTimeout(() => {
			setMessages((old) => [...old, { from: "Kind Guy", text: responseJson["recommended_response"], isCustom: true, isInsult: false }]);
		  }, 3);
	}
  };

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
    	<Header />
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