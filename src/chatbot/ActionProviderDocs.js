class ActionProviderDocs {
  constructor(createChatBotMessage, setState, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
    this.createClientMessage = createClientMessage;
  }

  greet(name) {
    const greetingMessage = this.createChatBotMessage(`Hello ${name}`);
    this.updateChatbotState(greetingMessage);
    this.handleOptions();
  }

  handleOptions() {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "linkList",
      }
    );

    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here
    // actually manipulates the top level state of the Chatbot, so it's
    // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProviderDocs;
