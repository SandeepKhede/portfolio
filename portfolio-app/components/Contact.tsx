"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="bg-[#121212] py-32 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tighter">
                        Let's Connect.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <a
                            href="mailto:sandeepkhedesk@gmail.com"
                            className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <span className="text-white/60 group-hover:text-white transition-colors text-lg">sandeepkhedesk@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sandeep-khede/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.466.792 22.24 1.771 22.24h20.451C23.2 22.24 24 21.466 24 20.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <span className="text-white/60 group-hover:text-white transition-colors text-lg">LinkedIn</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
