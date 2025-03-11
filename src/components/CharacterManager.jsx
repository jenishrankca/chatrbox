import React, { useState } from 'react';
import { useChat } from '../contexts/ChatContext';

const CharacterManager = () => {
  const { members, setMembers } = useChat();
  const [name, setName] = useState('');
  const [role, setRole] = useState('Human');
  const [avatar, setAvatar] = useState(null);

  const addMember = () => {
    if (!name) return;
    const newMember = {
      id: Date.now().toString(),
      name,
      role,
      avatar: avatar || '/assets/default-avatar.png',
    };
    setMembers([...members, newMember]);
    setName('');
    setRole('Human');
    setAvatar(null);
  };

  const removeMember = (id) => setMembers(members.filter((m) => m.id !== id));

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h3>Character Manager</h3>
      {members.map((member) => (
        <div key={member.id}>
          <img src={member.avatar} alt={member.name} width="30" />
          {member.name} ({member.role})
          <button onClick={() => removeMember(member.id)}>X</button>
        </div>
      ))}
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Human</option>
        <option>AI</option>
        <option>Admin</option>
        <option>System</option>
      </select>
      <input type="file" onChange={handleAvatarUpload} />
      <button onClick={addMember}>Add</button>
    </div>
  );
};

export default CharacterManager;