import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TimelineView: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Auto scroll to "Today" on mount
    useEffect(() => {
        if (containerRef.current) {
            // Simple timeout to ensure layout is done
            setTimeout(() => {
                const todayElement = document.getElementById('timeline-today');
                if (todayElement) {
                    todayElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, []);

    const timelineItems = [
        { date: 'Oct 12', icon: 'favorite', status: 'past', align: 'right' },
        { date: 'Nov 03', icon: 'favorite', status: 'past', align: 'left' },
        { date: 'Nov 24', icon: 'flight', status: 'past', align: 'right' },
        { date: 'Dec 01', icon: 'star', status: 'past', align: 'left' },
        { date: 'Dec 15', icon: 'auto_awesome', status: 'present', align: 'center' },
        { date: 'Dec 25', icon: 'lock', status: 'future', align: 'right' },
        { date: 'Jan 01', icon: 'lock', status: 'future', align: 'left' },
    ];

    return (
        <div className="relative h-full overflow-hidden bg-background-dark">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-40 px-6 pt-12 pb-6 bg-gradient-to-b from-background-dark to-transparent pointer-events-none">
                <div className="flex justify-between items-end pointer-events-auto">
                    <div>
                        <h1 className="text-3xl font-script text-primary">Enchanted Journey</h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-semibold mt-1">Day 142 of 248</p>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div ref={containerRef} className="h-full overflow-y-auto pt-40 pb-40 px-4 relative z-10 no-scrollbar">
                
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                     <span className="material-icons-outlined absolute top-[10%] left-[10%] text-primary animate-float">filter_vintage</span>
                     <span className="material-icons-outlined absolute top-[30%] right-[15%] text-primary animate-float" style={{animationDelay: '1s'}}>filter_vintage</span>
                     <span className="material-icons-outlined absolute top-[60%] left-[20%] text-primary animate-float" style={{animationDelay: '2s'}}>filter_vintage</span>
                </div>

                <div className="relative max-w-sm mx-auto min-h-[1500px]">
                    {/* SVG Path for the Ribbon */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '1500px' }}>
                        <defs>
                            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#880e2f" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#ee2b5b" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#880e2f" stopOpacity="0.2" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {/* A simplified S-curve path constructed manually for demonstration */}
                        <path 
                            d="M 190 0 
                               Q 190 100 190 150 
                               T 100 300 
                               T 280 450 
                               T 100 600 
                               T 280 750 
                               T 190 900 
                               T 100 1050
                               T 280 1200"
                            fill="none" 
                            stroke="url(#ribbonGradient)" 
                            strokeWidth="12"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />
                    </svg>

                    {/* Timeline Nodes */}
                    {timelineItems.map((item, index) => {
                        // Rough positioning logic based on index to follow the SVG curve approximation
                        // In a real app, you might calculate positions along the path.
                        let top = 150 + index * 150; 
                        let left = item.align === 'left' ? '20%' : item.align === 'right' ? '80%' : '50%';
                        
                        // Adjusting 'center' items to sit on the curve roughly
                        if (item.align === 'center') left = '50%';

                        // Specific manual overrides to match the S-Curve visually
                        if (index === 0) { top = 100; left = '50%'; } // Start center
                        if (index === 1) { top = 250; left = '25%'; } // Curve left
                        if (index === 2) { top = 400; left = '75%'; } // Curve right
                        if (index === 3) { top = 550; left = '25%'; } // Curve left
                        if (index === 4) { top = 700; left = '50%'; } // Center (Today)
                        if (index === 5) { top = 850; left = '75%'; } // Curve right
                        if (index === 6) { top = 1000; left = '25%'; } // Curve left

                        const isPresent = item.status === 'present';
                        const isFuture = item.status === 'future';

                        return (
                            <motion.div
                                key={index}
                                id={isPresent ? 'timeline-today' : undefined}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                                style={{ top: top, left: left, flexDirection: item.align === 'right' ? 'row-reverse' : 'row' }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {isPresent ? (
                                    <div className="flex flex-col items-center group cursor-pointer z-20">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary rounded-full blur-xl animate-pulse"></div>
                                            <div className="w-24 h-24 bg-burgundy-rich border-2 border-gold rounded-2xl flex items-center justify-center relative shadow-2xl transform transition hover:scale-105 active:scale-95">
                                                {/* Gift Box Styling */}
                                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-gold"></div>
                                                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 bg-gold"></div>
                                                <span className="material-icons text-gold text-4xl relative z-10">auto_awesome</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center bg-black/50 backdrop-blur-sm p-2 rounded-lg border border-primary/20">
                                            <span className="block text-primary font-bold text-xs uppercase tracking-widest">Today</span>
                                            <span className="block font-script text-xl text-white whitespace-nowrap">{item.date}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border ${isFuture ? 'bg-background-dark border-primary/20 text-white/20' : 'bg-primary border-primary text-white'}`}>
                                            <span className="material-icons text-sm">{item.icon}</span>
                                        </div>
                                        <div className={`font-script text-xl ${isFuture ? 'text-white/30' : 'text-gold'}`}>
                                            {item.date}
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                    
                    {/* The End Node */}
                    <div className="absolute top-[1200px] left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
                         <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center mb-2">
                             <span className="material-icons-outlined text-primary">star_outline</span>
                         </div>
                         <span className="font-script text-2xl text-primary">The Finale</span>
                         <span className="text-[10px] uppercase tracking-tighter text-white/50">May 2025</span>
                    </div>

                </div>
            </div>
        </div>
    );
};