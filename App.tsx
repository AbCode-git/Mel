import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { TimelineView } from './components/TimelineView';
import { ViewState } from './types';
import { GiftModal } from './components/GiftModal';
import { MemoryCard } from './components/MemoryCard';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewState>('home');
    const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

    // Mock functionality for the demo
    const handleOpenGift = () => {
        setIsGiftModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsGiftModalOpen(false);
    };

    const renderView = () => {
        switch (currentView) {
            case 'home':
                return <HomeView onOpenGift={handleOpenGift} />;
            case 'timeline':
                return <TimelineView />;
            case 'gallery':
                // Reusing MemoryCard for gallery demo for now, but usually would be a grid
                return (
                    <div className="h-full w-full flex items-center justify-center bg-background-dark text-white/50">
                        <div className="text-center">
                            <span className="material-icons text-4xl mb-2 opacity-50">grid_view</span>
                            <p className="font-display text-sm tracking-widest uppercase">Gallery Coming Soon</p>
                        </div>
                    </div>
                );
            default:
                return <HomeView onOpenGift={handleOpenGift} />;
        }
    };

    return (
        <div className="relative w-full h-[100dvh] bg-black flex justify-center overflow-hidden">
            {/* Mobile Container wrapper */}
            <div className="w-full max-w-md h-full bg-background-dark relative shadow-2xl overflow-hidden flex flex-col">
                
                {/* Main Content View */}
                <div className="flex-1 relative overflow-hidden">
                    {renderView()}
                </div>

                {/* Bottom Navigation */}
                <BottomNav currentView={currentView} onChangeView={setCurrentView} />

                {/* Gift Reveal Modal (Overlays everything) */}
                <GiftModal isOpen={isGiftModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    );
};

export default App;