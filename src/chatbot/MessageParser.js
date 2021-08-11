class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const userInput = message;
    const lowerCaseUserInput = userInput.toLowerCase();

    if (lowerCaseUserInput.includes("my name is ")) {
      const data = userInput.slice(10, 19);
      return this.actionProvider.greet(data);
    }

    if (lowerCaseUserInput.includes("name is ")) {
      const data = userInput.slice(8, 19);
      return this.actionProvider.greet(data);
    }

    if (lowerCaseUserInput) {
      return this.actionProvider.greet(userInput);
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
