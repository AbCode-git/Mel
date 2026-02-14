import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MemoryCard } from './MemoryCard';

interface GiftModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const GiftModal: React.FC<GiftModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<'closed' | 'opening' | 'revealed'>('closed');

    useEffect(() => {
        if (isOpen) {
            setStep('opening');
            // Simulate opening animation time
            const timer = setTimeout(() => {
                setStep('revealed');
            }, 2000); // 2 seconds of opening animation
            return () => clearTimeout(timer);
        } else {
            setStep('closed');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
            <AnimatePresence>
                {step === 'opening' && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20"
                    >
                         <div className="relative">
                            {/* Burst effect */}
                            <motion.div 
                                animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 bg-primary/40 rounded-full blur-2xl"
                            />
                            <motion.div 
                                animate={{ 
                                    rotate: [0, -10, 10, -10, 10, 0],
                                    scale: [1, 1.1, 1.2, 1]
                                }}
                                transition={{ duration: 1.5 }}
                                className="w-40 h-40 bg-burgundy-rich border-4 border-gold rounded-2xl flex items-center justify-center shadow-2xl relative z-10"
                            >
                                <span className="material-icons text-gold text-6xl">redeem</span>
                            </motion.div>
                        </div>
                        <motion.h2 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mt-8 text-gold font-script text-3xl"
                        >
                            Unwrapping Memory...
                        </motion.h2>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Actual Revealed Content */}
            {step === 'revealed' && (
                <motion.div 
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <MemoryCard onBack={onClose} />
                </motion.div>
            )}
        </div>
    );
};