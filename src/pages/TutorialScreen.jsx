import React from 'react';

const TutorialScreen = ({ onStartGame, onBack }) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-indigo-900 flex flex-col items-center justify-center font-sans p-6 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl animate-scale-in">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">How to Play</h2>
                    <p className="text-teal-400 font-bold uppercase tracking-widest text-xs">Master the Art of Sorting Truths</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-colors group">
                        <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <img src="/stickman_assets/thinking_stickman.svg" className="w-12 h-12" alt="Read" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">1. Read the Card</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            A card will appear in the center with a statement about mental health.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-colors group">
                        <div className="w-20 h-20 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <img src="/stickman_assets/pointing_stickman.svg" className="w-12 h-12" alt="Sort" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">2. Drag to Sort</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Drag or flick the card <span className="text-orange-400 font-bold">LEFT for Myths</span> or <span className="text-teal-400 font-bold">RIGHT for Facts</span>.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-colors group">
                        <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <img src="/stickman_assets/clock_stickman.svg" className="w-12 h-12 filter invert" alt="Timer" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">3. Beat the Clock</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            You have 60 seconds to sort as many as you can correctly. Speed and accuracy matter!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-full md:w-auto px-8 py-4 border-2 border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all active:scale-95"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={onStartGame}
                        className="w-full md:w-auto px-12 py-4 bg-teal-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-teal-400 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        Got it, Let's Go!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorialScreen;
