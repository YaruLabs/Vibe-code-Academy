"use client"

export default function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 dark:from-violet-950 dark:via-purple-950 dark:to-indigo-950 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden group">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-cyan-500/30 dark:bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-pink-500/20 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white/40 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-float" style={{ animationDelay: "0.5s", animationDuration: "4s" }} />
        <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-pink-300/40 rounded-full animate-float" style={{ animationDelay: "1s", animationDuration: "5s" }} />
        <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-purple-300/30 rounded-full animate-float" style={{ animationDelay: "1.5s", animationDuration: "6s" }} />
        <div className="absolute top-[15%] left-[60%] w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-float" style={{ animationDelay: "2s", animationDuration: "5.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white text-[10px] xs:text-xs sm:text-sm font-medium w-fit">
          <span className="relative flex h-1.5 w-1.5 xs:h-2 xs:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 xs:h-2 xs:w-2 bg-cyan-500"></span>
          </span>
          <span className="hidden xs:inline">Next-Gen Vibe-Coding Platform</span>
          <span className="xs:hidden">Vibe-Coding Platform</span>
        </div>

        {/* Main title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-gradient-x">
            AI-powered
          </span>
          <span className="block text-white mt-0.5 xs:mt-1 sm:mt-2">
            dApps <span className="text-cyan-300">&</span> Games
          </span>
        </h1>

        {/* Description */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/90 dark:text-white/80 max-w-2xl leading-relaxed">
          Learn to code the <span className="font-bold text-cyan-300">vibe-coding</span> way — smooth, modern, and creative.
          Build real skills and grow into a <span className="font-bold text-pink-300">confident developer</span>.
        </p>

        {/* CTA Pills */}
        <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 pt-1 xs:pt-2">
          <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-[10px] xs:text-xs sm:text-sm">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="hidden xs:inline">Smart Contracts</span>
            <span className="xs:hidden">Blockchain</span>
          </div>
          <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-[10px] xs:text-xs sm:text-sm">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Games
          </div>
          <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-[10px] xs:text-xs sm:text-sm">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Software
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
}
