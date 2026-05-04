import React, { useState } from 'react';
import QuizGame from './QuizGame.jsx';
import { audioManager } from './utils/audio.js';

// Simple standalone App: shows an intro then launches the game
const App = () => {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center font-sans relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-teal-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-2xl animate-fade-in">
          {/* Logo/Icon Container */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="/stickman_assets/thinking_stickman.svg" alt="Logo" className="w-16 h-16" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
            Myth or <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Fact?</span>
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]" />

          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed font-medium opacity-90">
            Challenge your perceptions and master the truth about mental health in this fast-paced card sorting game.
          </p>

          <button
            onClick={() => { audioManager.init(); setStarted(true); }}
            className="group relative px-12 py-5 bg-white text-indigo-900 font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Start Training
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </button>

          {/* Social/Status Labels */}
          <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
             <div className="flex flex-col items-center">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Version</span>
               <span className="text-xs font-bold text-teal-400">1.0.0</span>
             </div>
             <div className="w-px h-8 bg-white/20" />
             <div className="flex flex-col items-center">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Training</span>
               <span className="text-xs font-bold text-teal-400">QPR Method</span>
             </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-[15%] w-32 h-32 opacity-10 animate-float-slow">
            <img src="/stickman_assets/cloud.svg" className="w-full h-full filter invert" alt="" />
        </div>
        <div className="absolute bottom-20 left-[10%] w-48 h-48 opacity-10 animate-float-medium">
            <img src="/stickman_assets/cloud.svg" className="w-full h-full filter invert" alt="" />
        </div>
      </div>
    );
  }

  return (
    <QuizGame
      audioManager={audioManager}
      onExit={() => setStarted(false)}
    />
  );
};

export default App;
