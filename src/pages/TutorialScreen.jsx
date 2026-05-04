import React from 'react';

const TutorialScreen = ({ onStartGame, onBack }) => {
    return (
        <div className="game-container min-h-screen w-full flex flex-col items-center justify-center font-sans p-6 relative overflow-hidden">
             {/* Table Surface Texture Overlay */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>

            <div className="relative z-10 max-w-4xl w-full bg-[#3d2b1f] border-b-8 border-r-8 border-[#2a1d15] rounded-[3rem] p-8 md:p-12 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5),0_30px_60px_rgba(0,0,0,0.4)] animate-scale-in">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-md">Table Rules</h2>
                    <p className="text-teal-400 font-bold uppercase tracking-widest text-xs">Master the Art of Sorting Truths</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-black/20 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all group">
                        <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-lg border-4 border-white">
                            <img src="/stickman_assets/thinking_stickman.svg" className="w-12 h-12" alt="Read" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">1. Read the Card</h3>
                        <p className="text-teal-50/70 text-sm leading-relaxed font-medium">
                            A card will appear in the center with a statement about mental health.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-black/20 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all group">
                        <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg border-4 border-white">
                            <img src="/stickman_assets/pointing_stickman.svg" className="w-12 h-12" alt="Sort" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">2. Drag to Box</h3>
                        <p className="text-teal-50/70 text-sm leading-relaxed font-medium">
                            Drag the card <span className="text-orange-400 font-bold underline decoration-2">LEFT for Myths</span> or <span className="text-teal-400 font-bold underline decoration-2">RIGHT for Facts</span>.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-black/20 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all group">
                        <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border-4 border-white">
                            <img src="/stickman_assets/clock_stickman.svg" className="w-12 h-12" alt="Timer" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm mb-3">3. Beat the Clock</h3>
                        <p className="text-teal-50/70 text-sm leading-relaxed font-medium">
                            You have 60 seconds to sort correctly. Accuracy is your greatest asset.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-full md:w-auto px-8 py-4 bg-black/20 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-black/30 transition-all active:scale-95 border border-white/10"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={onStartGame}
                        className="w-full md:w-auto px-12 py-4 bg-teal-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_20px_rgba(20,184,166,0.3)] hover:bg-teal-400 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        Begin Training
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorialScreen;
