// components/Loader.jsx
import { motion } from 'framer-motion';
import logo from "../assets/images/h-red.png";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf6f2]">
            {/* Logo with dual animation */}
            <motion.div
                className="relative w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99]
                }}
            >
                {/* Your logo */}
                <img
                    src={logo}
                    alt="Heavens Living"
                    className="w-[60px] h-full object-contain ml-7"
                />

                {/* Pulsing circle */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-[#631930]/30 pointer-events-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Animated progress bar */}
            <motion.div
                className="mt-8 w-48 h-1 bg-[#631930]/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="h-full bg-[#631930] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                    }}
                />
            </motion.div>

            {/* Loading text with fade */}
            <motion.p
                className="mt-4 text-[#631930]/70 tracking-widest text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                HEAVENS LIVING
            </motion.p>
        </div>
    );
};

export default Loader;