/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rectangleVariants = {
    initial: {
        x: "0%",
    },
    animate: (i: any) => ({
        x: "100%",
        transition: {
            delay: 0.1 * i,
            duration: 0.5,
            ease: "easeIn",
        },
    }),
};

const Loading = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full z-50"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-full h-1/5 bg-[#121212] flex items-center justify-center`}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    variants={rectangleVariants}
                    style={{ top: `${i * 20}%` }}
                >
                    {i === 2 && (
                        <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M76 90C82.6274 90 88 84.6274 88 78C88 71.3726 82.6274 66 76 66C69.3726 66 64 71.3726 64 78C64 84.6274 69.3726 90 76 90Z" fill="#02BB36" />
                            <path d="M74 160C80.6274 160 86 154.627 86 148C86 141.373 80.6274 136 74 136C67.3726 136 62 141.373 62 148C62 154.627 67.3726 160 74 160Z" fill="#02BB36" />
                            <path d="M64 58C66.2091 58 68 56.2091 68 54C68 51.7909 66.2091 50 64 50C61.7909 50 60 51.7909 60 54C60 56.2091 61.7909 58 64 58Z" fill="#02BB36" />
                            <path d="M59 114C60.6569 114 62 112.657 62 111C62 109.343 60.6569 108 59 108C57.3431 108 56 109.343 56 111C56 112.657 57.3431 114 59 114Z" fill="#02BB36" />
                            <path d="M136 117C137.657 117 139 115.657 139 114C139 112.343 137.657 111 136 111C134.343 111 133 112.343 133 114C133 115.657 134.343 117 136 117Z" fill="#02BB36" />
                            <path d="M107 162C108.657 162 110 160.657 110 159C110 157.343 108.657 156 107 156C105.343 156 104 157.343 104 159C104 160.657 105.343 162 107 162Z" fill="#02BB36" />
                            <path d="M100 100C102.209 100 104 98.2091 104 96C104 93.7909 102.209 92 100 92C97.7909 92 96 93.7909 96 96C96 98.2091 97.7909 100 100 100Z" fill="#02BB36" />
                            <path d="M85 122C88.866 122 92 118.866 92 115C92 111.134 88.866 108 85 108C81.134 108 78 111.134 78 115C78 118.866 81.134 122 85 122Z" fill="#02BB36" />
                            <path d="M128 54C131.314 54 134 51.3137 134 48C134 44.6863 131.314 42 128 42C124.686 42 122 44.6863 122 48C122 51.3137 124.686 54 128 54Z" fill="#02BB36" />
                            <path d="M125.5 99C134.613 99 142 91.6127 142 82.5C142 73.3873 134.613 66 125.5 66C116.387 66 109 73.3873 109 82.5C109 91.6127 116.387 99 125.5 99Z" fill="#02BB36" />
                            <path d="M97 62C101.971 62 106 57.9706 106 53C106 48.0294 101.971 44 97 44C92.0294 44 88 48.0294 88 53C88 57.9706 92.0294 62 97 62Z" fill="#02BB36" />
                            <path d="M119 148C127.284 148 134 141.284 134 133C134 124.716 127.284 118 119 118C110.716 118 104 124.716 104 133C104 141.284 110.716 148 119 148Z" fill="#02BB36" />
                            <path d="M33.26 185C29.6067 185.082 25.9612 184.627 22.44 183.65C19.9313 182.942 17.6655 181.558 15.89 179.65C14.0111 177.483 12.6774 174.897 12 172.11C11.0126 168.039 10.5555 163.858 10.64 159.67V126.67C10.64 120.53 9.69 116.06 7.74 113.02C5.89765 110.294 3.15938 108.299 0 107.38L0 90.71C5.33 88.92 10.67 84.36 10.67 73.3V40.3C10.67 30.92 12.4 24.3 15.8 20.51C19.2 16.72 25.19 15 33.78 15H45V31.46H44.62C42.4039 31.4347 40.1887 31.5617 37.99 31.84C36.0015 32.0578 34.1292 32.8857 32.63 34.21C31.2254 35.6175 30.3044 37.435 30 39.4C29.6347 41.5501 29.4707 43.7295 29.51 45.91V75.05C29.5391 77.9616 29.3687 80.8717 29 83.76C28.7618 85.6165 28.246 87.4267 27.47 89.13C26.7514 90.637 25.7538 91.9943 24.53 93.13C22.8156 94.7027 20.9983 96.1592 19.09 97.49L15.36 100.13L19.17 102.65C21.0388 103.841 22.7665 105.24 24.32 106.82C25.5675 108.13 26.6002 109.628 27.38 111.26C28.2002 113.027 28.7465 114.909 29 116.84C29.3528 119.545 29.5198 122.272 29.5 125V154.14C29.4649 156.264 29.629 158.387 29.99 160.48C30.2812 162.392 31.146 164.17 32.47 165.58C33.8835 166.929 35.6783 167.808 37.61 168.1C39.8707 168.468 42.1599 168.632 44.45 168.59H45V185H33.26Z" fill="white" />
                            <path d="M166.74 185C170.393 185.082 174.039 184.627 177.56 183.65C180.069 182.942 182.335 181.558 184.11 179.65C185.975 177.485 187.298 174.908 187.97 172.13C188.957 168.059 189.415 163.878 189.33 159.69V126.69C189.33 120.55 190.28 116.08 192.23 113.04C194.075 110.297 196.825 108.29 200 107.37V90.71C194.67 88.92 189.33 84.36 189.33 73.3V40.3C189.33 30.92 187.6 24.3 184.2 20.51C180.8 16.72 174.81 14.97 166.2 14.97H155V31.46H155.38C157.596 31.4347 159.811 31.5617 162.01 31.84C163.998 32.0578 165.871 32.8857 167.37 34.21C168.775 35.6175 169.696 37.435 170 39.4C170.365 41.5501 170.529 43.7295 170.49 45.91V75.05C170.451 77.9609 170.611 80.871 170.97 83.76C171.208 85.6165 171.724 87.4267 172.5 89.13C173.219 90.637 174.216 91.9943 175.44 93.13C177.154 94.7027 178.972 96.1592 180.88 97.49L184.61 100.13L180.8 102.65C178.931 103.841 177.204 105.24 175.65 106.82C174.403 108.13 173.37 109.628 172.59 111.26C171.766 113.039 171.22 114.935 170.97 116.88C170.626 119.569 170.466 122.279 170.49 124.99V154.13C170.525 156.254 170.361 158.377 170 160.47C169.761 162.408 168.881 164.21 167.5 165.59C166.12 166.971 164.318 167.851 162.38 168.09C160.119 168.458 157.83 168.622 155.54 168.58H155V185H166.74Z" fill="white" />
                        </svg>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export const PageTransition = ({ children }: any) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (isFirstLoad) {
            setIsAnimating(true); // Start the animation on first load
            setShowContent(false); // Hide content during the animation

            const timeout = setTimeout(() => {
                setIsAnimating(false); // End the animation
                setShowContent(true); // Show the content after the animation ends
                setIsFirstLoad(false); // Mark that the first load has completed
            }, 1000); // Adjust the duration for your animation

            return () => clearTimeout(timeout); // Cleanup on unmount
        } else {
            setShowContent(true); // Immediately show content on subsequent page loads
        }
    }, [isFirstLoad]);

    return (
        <>
            <AnimatePresence>
                {isAnimating && <Loading />} {/* Show loading animation on first load */}
            </AnimatePresence>
            {showContent && ( // Render content only after the first load animation ends
                <div
                    className={`relative ${isAnimating ? "pointer-events-none" : "pointer-events-auto"
                        }`}
                >
                    {children}
                </div>
            )}
        </>
    );
};
