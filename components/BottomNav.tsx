import React from 'react';
import { ViewState } from '../types';

interface BottomNavProps {
    currentView: ViewState;
    onChangeView: (view: ViewState) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
    const navItems: { id: ViewState; icon: string; label: string }[] = [
        { id: 'home', icon: 'home', label: 'HOME' },
        { id: 'timeline', icon: 'timeline', label: 'TIMELINE' },
        { id: 'gallery', icon: 'photo_library', label: 'GALLERY' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pointer-events-none">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 flex justify-between items-center shadow-2xl pointer-events-auto max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onChangeView(item.id)}
                            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                                isActive ? 'text-primary scale-110' : 'text-white/40 hover:text-white/60'
                            }`}
                        >
                            <span className={`material-icons-outlined ${isActive ? 'text-2xl' : 'text-xl'}`}>
                                {item.icon}
                            </span>
                            {isActive && (
                                <span className="text-[9px] font-bold tracking-widest">{item.label}</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};