import React from 'react';
import { motion } from 'framer-motion';

interface MemoryCardProps {
    onBack: () => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ onBack }) => {
    return (
        <div className="h-full w-full flex flex-col relative overflow-hidden bg-[#2d0202]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/noise.png)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-burgundy-rich/50 via-[#2d0202] to-black/90 pointer-events-none"></div>

            {/* Header */}
            <header className="relative z-10 w-full flex justify-between items-center px-6 pt-12 pb-4">
                <button onClick={onBack} className="text-gold/80 hover:text-white transition-colors p-2 -ml-2">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
                </button>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold">Day 200 of 248</p>
                </div>
                <button className="text-gold/80 hover:text-white transition-colors p-2 -mr-2">
                    <span className="material-symbols-outlined text-2xl">more_horiz</span>
                </button>
            </header>

            {/* Content Container */}
            <main className="relative z-10 flex-1 flex flex-col items-center px-8 pb-10 overflow-y-auto">
                
                {/* Polaroid Frame */}
                <motion.div 
                    initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
                    animate={{ rotate: -2, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="relative w-full aspect-[4/5] bg-white p-3 pb-12 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] transform rotate-[-2deg] mb-8 mt-4 hover:rotate-0 transition-transform duration-500"
                >
                    <div className="w-full h-full overflow-hidden bg-gray-200 filter contrast-110">
                        <img 
                            alt="Couple laughing" 
                            className="w-full h-full object-cover grayscale sepia-[0.2]" 
                            src="https://picsum.photos/600/800?grayscale" 
                        />
                    </div>
                    {/* Texture overlay on photo */}
                    <div className="absolute inset-3 bottom-12 bg-gradient-to-tr from-orange-900/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </motion.div>

                {/* Typography */}
                <div className="w-full text-center space-y-6 mb-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gold font-script text-5xl drop-shadow-sm"
                    >
                        My One and Only
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="relative px-4 py-6"
                    >
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30"></div>
                        
                        <p className="text-white/90 font-serif italic text-xl leading-relaxed tracking-wide">
                            "In every whisper of the breeze,<br/>
                            Your name is what I hear with ease.<br/>
                            A journey of two hundred days,<br/>
                            Spent lost within your loving gaze."
                        </p>
                    </motion.div>
                </div>

                {/* Footer Action */}
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                    className="mt-auto"
                >
                    <button className="group flex flex-col items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-active:opacity-80 transition-opacity"></div>
                            <div className="relative w-16 h-16 bg-primary rounded-full border-4 border-burgundy-rich flex items-center justify-center shadow-[0_0_25px_rgba(238,43,91,0.6)] transform transition-transform group-active:scale-90">
                                <span className="material-symbols-outlined text-white text-3xl fill-1">favorite</span>
                            </div>
                        </div>
                        <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-gold animate-pulse">
                            Sent with Love
                        </span>
                    </button>
                </motion.div>
            </main>
        </div>
    );
};