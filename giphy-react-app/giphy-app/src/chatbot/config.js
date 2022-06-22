import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "GiphyBot",
    initialMessages: [createChatBotMessage("Hi, I am here to help. What can I do to assist you")],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E'
        },
        chatButton: {
            backgroundColor: '#376B7E'
        }
    }
}

export default config