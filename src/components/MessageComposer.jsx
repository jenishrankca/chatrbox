import React, { useState } from 'react';
import { useChat } from '../contexts/ChatContext';

const MessageComposer = () => {
  const { addMessage, members, currentGroupId } = useChat();
  const [content, setContent] = useState('');
  const [senderId, setSenderId] = useState('');
  const [type, setType] = useState('text');

  const handleSend = () => {
    if (!content || !senderId) return;
    const newMsg = {
      id: Date.now().toString(),
      groupId: currentGroupId,
      senderId,
      type,
      content,
    };
    addMessage(newMsg);
    setContent('');
  };

  return (
    <div>
      <select value={senderId} onChange={(e) => setSenderId(e.target.value)}>
        <option value="">Select Sender</option>
        {members.map((m) => (
          <option value={m.id} key={m.id}>{m.name}</option>
        ))}
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="system">System</option>
        <option value="action">Action</option>
        <option value="audio">Audio</option>
        <option value="glitch">Glitch</option>
      </select>
      <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="Message..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageComposer;