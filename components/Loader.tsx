import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]">
            <div className="w-64 space-y-4">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "linear",
                        }}
                    />
                </div>
                <p className="text-center text-sm font-medium tracking-widest text-white/50 uppercase">
                    Loading Experience
                </p>
            </div>
        </div>
    );
}
