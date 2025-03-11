import React from 'react';

const ThemeCustomizer = () => {
  return (
    <div>
      <h3>Theme Customizer</h3>
      <select>
        <option value="default">Default</option>
        <option value="neon">Neon</option>
        <option value="imessage">iMessage</option>
        <option value="discord">Discord</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="chatgpt">ChatGPT</option>
      </select>
      <button>Toggle Dark Mode</button>
    </div>
  );
};

export default ThemeCustomizer;