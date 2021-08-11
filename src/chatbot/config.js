import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LinkList from "../components/LinkList";

const botName = "MajorBot";

const Config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hi, I'm ${botName}.`),
    createChatBotMessage("What's your name?", {
      withAvatar: true,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "linkList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
      mapStateToProps: ["gist"],
    },
  ],
};

export default Config;
