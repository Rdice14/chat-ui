import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Chat = () => {

	const responseList = [
		"Use humor.Humor serves three fundamental purposes after an insulting remark: it thwarts a mean-spirited insult, it lessens any animosity, and puts a potential audience in your corner.",
		"Walk away (avoidance). You can always choose to let the remark slide. Honestly, choosing to ignore an insult, whether light-hearted or mean-spirited, gives you a lot of power. It's like saying to the person, 'I don't find that comment worthy of my reaction'.",
		"Contact your parents or inform school. If the person continues to make insulting comments despite your urging him to stop, take your complaints to the next level. Reach out to a teacher, parent, supervisor, or other person in authority and tell them about the insulting remarks.",
		"Have a buddy system. In the mind of the person insulting, one person is easy to conquer—but a whole group is too much work. Hang out with your friends as much as possible. The more time you spend with others, the less likely people will insult you.",
		"Be proud of who you are. Build up your self-confidence to withstand insulting remarks. It's important to be proud of yourself and love yourself no matter what the people say",
		"Create an exit strategy. Know when to log off from the chat. If the person insulting is too much for you to handle, you can just walk away from the chat. This will prevent more insults to be hurled at you."
	];

  const [messages, setMessages] = useState([]);

  const [withInsult, setWithInsult] = useState(false);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = async () => {
	if (!inputMessage.trim().length) {
		return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data, insult: false }]);
	setInputMessage("");

	const uri = `http://localhost:5000/get-response/${data}/${withInsult}`;
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
			setMessages((old) => [...old, { from: "Kind Guy", text: responseList[[Math.floor(Math.random()*responseList.length)]], isCustom: true, isInsult: false }]);
		  }, 3);
	}
  };

  const switchInsult = () => {
	console.log("Switching Insult");
	setWithInsult(!withInsult);
  }

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
    	<Header switchInsult={switchInsult} withInsult={withInsult}/>
    	<Divider />
		<Messages messages={messages} />
		<Divider />
    	<Footer
      	inputMessage={inputMessage}
      	setInputMessage={setInputMessage}
      	handleSendMessage={handleSendMessage}
    	/>
  	</Flex>
	</Flex>
  );
};

export default Chat;