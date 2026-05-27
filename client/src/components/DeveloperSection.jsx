import React from 'react'

const DeveloperSection = () => {
    return (
        <div className="container px-4 2xl:px-20 mx-auto mt-20 mb-10">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-500/20">
                
                {/* Visual Ambient Glows */}
                <div className="absolute top-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mb-16 pointer-events-none"></div>

                {/* Profile Details Group */}
                <div className="flex flex-col md:flex-row items-center gap-6 z-10">
                    {/* Premium Avatar Representation */}
                    <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400 p-1 shadow-lg flex items-center justify-center transform hover:rotate-3 transition-transform duration-300">
                            <div className="w-full h-full bg-slate-900 rounded-2xl flex flex-col items-center justify-center">
                                <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">PM</span>
                            </div>
                        </div>
                        <span className="absolute bottom-1 right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
                        </span>
                    </div>

                    <div className="text-center md:text-left">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-teal-300 uppercase bg-teal-900/40 rounded-full border border-teal-500/30">
                            Lead Architect
                        </span>
                        <h3 className="text-3xl font-bold tracking-tight text-white mt-2">Podugu Mukesh</h3>
                        <p className="text-blue-200 mt-1 max-w-md font-light text-sm md:text-base">
                            Full Stack Engineer specializing in robust web architectures, modern visual aesthetics, and interactive user interfaces.
                        </p>
                        
                        {/* Skills / Tech Badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                            {['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                                <span key={tech} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 w-full md:w-auto z-10">
                    <a 
                        href="mailto:mukeshpodugu123@gmail.com"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Me
                    </a>
                    <a 
                        href="tel:8143999463"
                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium px-6 py-3 rounded-xl backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                    >
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Developer
                    </a>
                </div>

            </div>
        </div>
    )
}

export default DeveloperSection
