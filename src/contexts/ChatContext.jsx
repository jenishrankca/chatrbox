import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [currentGroupId, setCurrentGroupId] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typingIndicators, setTypingIndicators] = useState([]);

  const addGroup = (group) => setGroups([...groups, group]);
  const switchGroup = (groupId) => setCurrentGroupId(groupId);
  const addMessage = (message) => setMessages([...messages, message]);

  return (
    <ChatContext.Provider
      value={{
        groups,
        currentGroupId,
        members,
        messages,
        typingIndicators,
        setGroups,
        setCurrentGroupId,
        setMembers,
        setMessages,
        setTypingIndicators,
        addGroup,
        switchGroup,
        addMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};