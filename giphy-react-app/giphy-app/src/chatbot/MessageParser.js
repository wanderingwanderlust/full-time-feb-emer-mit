class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider
    }

    parse(message) {
        // parse some logic
        const lowerCaseMessage = message.toLowerCase()
        if(lowerCaseMessage.includes('hello')) {
            this.actionProvider.greet()
        }

        if(lowerCaseMessage.include('withdraw')) {
            this.actionProvider.withdraw();
        }
    }
}

export default MessageParser