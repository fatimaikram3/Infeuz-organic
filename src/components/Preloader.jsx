import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    <motion.div
                        className="preloader-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 1, ease: "easeOut" }
                        }}
                    >
                        <img
                            src="/src/assets/logo.png"
                            alt="Infeuz Organic Logo"
                            className="preloader-logo"
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <motion.div
                            className="preloader-bar"
                            initial={{ width: 0 }}
                            animate={{
                                width: "100%",
                                transition: { duration: 1.5, ease: "easeInOut" }
                            }}
                        />
                        <motion.h2
                            className="luxury-font mt-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { delay: 0.5, duration: 0.8 }
                            }}
                        >
                            INFEUZ <span className="font-light italic">ORGANIC</span>
                        </motion.h2>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
