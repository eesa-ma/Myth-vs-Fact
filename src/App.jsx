import React, { useState } from 'react';
import SplashScreen from './pages/SplashScreen.jsx';
import TutorialScreen from './pages/TutorialScreen.jsx';
import QuizGame from './QuizGame.jsx';
import { audioManager } from './utils/audio.js';

const App = () => {
  const [gameState, setGameState] = useState('SPLASH');

  // Navigation handlers
  const handleStartTutorial = () => {
    audioManager.init();
    setGameState('TUTORIAL');
  };

  const handleStartGame = () => {
    setGameState('PLAYING');
  };

  const handleBackToSplash = () => {
    setGameState('SPLASH');
  };

  const handleExitGame = () => {
    setGameState('SPLASH');
  };

  return (
    <div className="game-wrapper min-h-screen w-full bg-slate-900">
      {gameState === 'SPLASH' && (
        <SplashScreen onStart={handleStartTutorial} />
      )}

      {gameState === 'TUTORIAL' && (
        <TutorialScreen 
          onStartGame={handleStartGame} 
          onBack={handleBackToSplash} 
        />
      )}

      {gameState === 'PLAYING' && (
        <QuizGame
          audioManager={audioManager}
          onExit={handleExitGame}
        />
      )}
    </div>
  );
};

export default App;
