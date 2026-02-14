import React from 'react';
import { motion } from 'framer-motion';

interface HomeViewProps {
    onOpenGift: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenGift }) => {
    return (
        <div className="relative h-full flex flex-col items-center pt-14 pb-32 overflow-y-auto overflow-x-hidden">
            {/* Background Particles (Static for performance, could be animated) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_#fff]"></div>
                <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
            </div>

            {/* Header / Countdown */}
            <header className="text-center z-20 w-full px-6 mb-8">
                <span className="text-primary font-semibold tracking-[0.3em] uppercase text-[20px] mb-8 block opacity-80">
                    My Journey with Mel
                </span>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-3 mb-6">
                        {['2', '4', '8'].map((digit, i) => (
                            <motion.div 
                                key={i}
                                initial={{ rotateX: 90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 100 }}
                                className="relative bg-[#0f0608] border border-primary/20 rounded-xl w-20 h-28 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                            >
                                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/80 z-10 shadow-[0_1px_0_rgba(255,255,255,0.05)]"></div>
                                <span className="font-serif font-black text-6xl text-white drop-shadow-[0_0_10px_rgba(238,43,91,0.5)]">
                                    {digit}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h1 className="font-serif text-2xl text-white/95 tracking-widest mb-2">Days to Forever</h1>
                        <div className="w-12 h-0.5 bg-primary/40 rounded-full mx-auto mb-6"></div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-primary/70 font-bold">
                            Counting Down the Moments
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content Area (Floating Bubbles & Gift) */}
            <main className="relative w-full flex-1 flex flex-col items-center justify-center min-h-[400px]">
                {/* Floating Bubbles */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[0%] left-[8%] bg-primary/10 backdrop-blur-md border border-primary/20 p-4 rounded-full max-w-[140px] text-center z-10 -rotate-6"
                >
                    <p className="text-[10px] text-white/90 italic">"The night we first met under the neon lights..."</p>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[20%] right-[5%] bg-primary/10 backdrop-blur-md border border-primary/20 p-4 rounded-full max-w-[120px] text-center z-10 rotate-6"
                >
                    <p className="text-[10px] text-white/90 italic">"Your smile is my favorite poem."</p>
                </motion.div>

                {/* 3D Gift Box Representation */}
                <motion.div 
                    className="relative group z-20 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenGift}
                >
                    <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full"></div>
                    <div className="relative w-64 h-64 rounded-2xl flex items-center justify-center gift-glow">
                        <img 
                            alt="Daily Gift" 
                            className="w-full h-full object-cover rounded-2xl shadow-2xl brightness-90 contrast-110 border-2 border-primary/30" 
                            src="https://picsum.photos/400/400?random=1" 
                        />
                        {/* Overlay Gift Bow/Icon */}
                        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                            <div className="bg-primary p-5 rounded-full shadow-[0_0_30px_rgba(238,43,91,0.6)] animate-pulse-slow">
                                <span className="material-icons text-white text-4xl">redeem</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[10%] left-[10%] bg-primary/10 backdrop-blur-md border border-primary/20 p-4 rounded-full max-w-[130px] text-center z-10 -rotate-3"
                >
                    <p className="text-[10px] text-white/90 italic">"Forever isn't long enough."</p>
                </motion.div>
            </main>

            {/* CTA Button */}
            <div className="w-full px-10 z-30 mt-8">
                <button 
                    onClick={onOpenGift}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full shadow-[0_0_30px_rgba(238,43,91,0.5)] transition-all flex items-center justify-center gap-3 group"
                >
                    <span className="material-icons group-hover:rotate-12 transition-transform">redeem</span>
                    <span className="tracking-widest text-xs uppercase">Open Today's Gift</span>
                </button>
            </div>
        </div>
    );
};