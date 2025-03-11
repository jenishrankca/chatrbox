import React, { useState, useEffect } from 'react';

const PlaybackController = () => {
  const [play, setPlay] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (play) console.log(`Simulating playback at speed ${speed}`);
  }, [play, speed]);

  return (
    <div>
      <button onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
      <label>
        Speed:
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
        />
      </label>
    </div>
  );
};

export default PlaybackController;