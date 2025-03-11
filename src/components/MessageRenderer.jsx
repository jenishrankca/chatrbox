import React from 'react';
import { useChat } from '../contexts/ChatContext';

const MessageRenderer = () => {
  const { messages, members } = useChat();

  const getSender = (id) => members.find((m) => m.id === id) || {};

  return (
    <div>
      <h3>Messages</h3>
      {messages.map((msg) => {
        const sender = getSender(msg.senderId);
        return (
          <div key={msg.id}>
            {msg.type !== 'system' && (
              <strong>{sender.name} ({sender.role}): </strong>
            )}
            <span>{msg.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MessageRenderer;