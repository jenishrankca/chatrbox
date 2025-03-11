import React from 'react';
import { ChatProvider } from '../contexts/ChatContext';
import CharacterManager from './CharacterManager.jsx';
import MessageRenderer from './MessageRenderer.jsx';
import MessageComposer from './MessageComposer.jsx';
import PlaybackController from './PlaybackController.jsx';
import ThemeCustomizer from './ThemeCustomizer.jsx';

const ChatApp = () => {
  return (
    <ChatProvider>
      <div className="chat-app-container">
        <h1>ChatrBox</h1>
        <div className="layout">
          <aside>
            <CharacterManager />
            <ThemeCustomizer />
          </aside>
          <main>
            <PlaybackController />
            <MessageRenderer />
            <MessageComposer />
          </main>
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatApp;