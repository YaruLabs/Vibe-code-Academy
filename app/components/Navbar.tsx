export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Vibe-Code Prompts
          </h1>
        </div>
      </div>
    </nav>
  );
}
