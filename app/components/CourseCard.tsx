"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Course, Prompt } from "../types/course";
import MDXRenderer from "./MDXRenderer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePromptExporter } from "../hooks/usePromptExporter";

type CourseCardProps = Omit<Course, "id">;

const categoryColors = {
  blockchain: "bg-blue-500",
  games: "bg-pink-500",
  software: "bg-orange-500",
};

const categoryGradients = {
  blockchain: "from-blue-500/20 via-blue-500/10 to-transparent",
  games: "from-pink-500/20 via-pink-500/10 to-transparent",
  software: "from-orange-500/20 via-orange-500/10 to-transparent",
};

const categoryAccents = {
  blockchain: "bg-blue-500",
  games: "bg-pink-500",
  software: "bg-orange-500",
};

const categoryBorders = {
  blockchain: "border-blue-500/30",
  games: "border-pink-500/30",
  software: "border-orange-500/30",
};

const categoryTextAccents = {
  blockchain: "text-blue-500",
  games: "text-pink-500",
  software: "text-orange-500",
};

const aiAgentMap: Record<string, { name: string; icon: string }> = {
  claude: { name: "Claude", icon: "/icons/ai/claude.png" },
  gemini: { name: "Gemini", icon: "/icons/ai/gemini.png" },
  openai: { name: "OpenAI", icon: "/icons/ai/openai.svg" },
};

const extractTitleFromMdxPath = (path: string): string => {
  // Extract filename from path: "/docs/.../.../01-overview.mdx" -> "01-overview.mdx"
  const filename = path.split('/').pop() || '';

  // Remove extension: "01-overview.mdx" -> "01-overview"
  const nameWithoutExt = filename.replace('.mdx', '');

  // Remove number prefix: "01-overview" -> "overview"
  const nameWithoutNumber = nameWithoutExt.replace(/^\d+-/, '');

  // Replace hyphens with spaces and capitalize: "overview" -> "Overview"
  const words = nameWithoutNumber.split('-');
  const capitalized = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return capitalized;
};

export default function CourseCard({ image, title, description, prompts, category }: CourseCardProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isDialogReady, setIsDialogReady] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const { exportPrompt, isExporting, exportStatus } = usePromptExporter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedPrompt(null);
      setCurrentPageIndex(0);
      setShowWelcome(true);
    }
  };

  const handleCopyContent = async () => {
    if (!selectedPrompt || !selectedPrompt.mdxPages[currentPageIndex]) return;

    try {
      const response = await fetch(selectedPrompt.mdxPages[currentPageIndex]);
      const mdxContent = await response.text();
      await navigator.clipboard.writeText(mdxContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy content:', error);
    }
  };

  const handleNextPage = () => {
    if (selectedPrompt && currentPageIndex < selectedPrompt.mdxPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleSelectPromptCard = (prompt: Prompt) => {
    console.log('Selected prompt:', prompt.title, 'Pages:', prompt.mdxPages.length);
    setSelectedPrompt(prompt);
    setCurrentPageIndex(0);
  };

  useEffect(() => {
    setIsDialogReady(true);
  }, []);

  useEffect(() => {
    if (selectedPrompt) {
      console.log('Selected prompt changed:', selectedPrompt.title);
      console.log('Total pages:', selectedPrompt.mdxPages.length);
      console.log('mdxPages array:', selectedPrompt.mdxPages);
    }
  }, [selectedPrompt]);

  const courseCardPreview = (
    <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-101 h-full w-full cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-white/90 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );

  if (!isDialogReady) {
    return courseCardPreview;
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {courseCardPreview}
      </DialogTrigger>
      <DialogContent className={`max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1200px] h-[90vh] overflow-y-auto flex flex-col gap-0 ${selectedPrompt ? 'p-0' : 'p-6'}`}>
        {selectedPrompt && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
            <div className={`${categoryColors[category]} text-white px-6 py-2 rounded-bl-xl rounded-br-xl shadow-lg font-semibold text-sm relative`}>
              {selectedPrompt.title}
            </div>
          </div>
        )}
        {!selectedPrompt ? (
          <>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg mb-6">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-6 sm:p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl sm:text-4xl text-white">{title}</DialogTitle>
                  <DialogDescription className="text-lg sm:text-xl pt-2 text-white/90">
                    {description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              In this section, we aim to continuously expand the creative and technical tools available to the team. The goal is to research, test, and document new prompts that improve quality, consistency, and speed across our workflows. At the same time, we develop clear, practical tutorials that help any team member quickly understand and apply the latest techniques. This ongoing exploration ensures that we stay innovative, efficient, and aligned with best practices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    onClick={() => handleSelectPromptCard(prompt)}
                    className="relative h-32 sm:h-40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-102 group"
                  >
                    <Image
                      src={prompt.image}
                      alt={prompt.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <h4 className="text-lg sm:text-xl font-bold text-white text-center">
                        {prompt.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : showWelcome ? (
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[category]} pointer-events-none`} />
            <div className={`absolute top-0 right-0 w-96 h-96 ${categoryAccents[category]} rounded-full blur-3xl opacity-10 pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-96 h-96 ${categoryAccents[category]} rounded-full blur-3xl opacity-10 pointer-events-none`} />

            <div className="relative z-10 flex flex-col h-full p-6 pt-8">
              <div className="mb-6">
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 hover:bg-white/50 dark:hover:bg-zinc-800/50 rounded-2xl p-2 transition-all backdrop-blur-sm"
                >
                  <span>←</span> Back
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 w-full">
                <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {/* Category badge */}
                  <div className="flex justify-center">
                    <span className={`${categoryAccents[category]} text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg`}>
                      {category}
                    </span>
                  </div>

                  {/* Title with gradient text */}
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white text-center leading-tight">
                    {selectedPrompt.welcome.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 text-center max-w-2xl mx-auto font-medium">
                    {selectedPrompt.welcome.description}
                  </p>

                  {/* Agenda cards */}
                  <div className={`grid gap-4 pt-4 ${
                    selectedPrompt.mdxPages.length === 1
                      ? 'grid-cols-1 max-w-2xl mx-auto'
                      : selectedPrompt.mdxPages.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : selectedPrompt.mdxPages.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {selectedPrompt.mdxPages.map((mdxPath, index) => (
                      <div
                        key={index}
                        className={`group bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-5 border-2 ${categoryBorders[category]} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${categoryAccents[category]} text-white flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                            {index + 1}
                          </div>
                          <p className="text-zinc-800 dark:text-zinc-200 font-medium pt-2 leading-relaxed">
                            {extractTitleFromMdxPath(mdxPath)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center pt-8">
                    <button
                      onClick={() => setShowWelcome(false)}
                      className={`group relative px-12 py-5 ${categoryAccents[category]} text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Continue
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[category]} opacity-30 pointer-events-none`} />
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${categoryAccents[category]} rounded-full blur-3xl opacity-5 pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] ${categoryAccents[category]} rounded-full blur-3xl opacity-5 pointer-events-none`} />

            <div className="relative z-10 flex flex-col h-full p-6 pt-8">
              <div className="mb-6">
                <button
                  onClick={() => setShowWelcome(true)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 hover:bg-white/50 dark:hover:bg-zinc-800/50 rounded-2xl p-2 transition-all backdrop-blur-sm"
                >
                  <span>←</span> Back
                </button>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
              <div className="lg:w-4/5 overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 relative">
                <button
                  onClick={handleCopyContent}
                  className="sticky top-4 float-right ml-4 mb-4 p-2 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors shadow-md z-10 mt-4 mr-4"
                  title={copied ? "Copied!" : "Copy content"}
                >
                  {copied ? (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-green-600">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-zinc-600 dark:text-zinc-400">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 2C3.44772 2 3 2.44772 3 3V11C3 11.5523 3.44772 12 4 12H10C10.5523 12 11 11.5523 11 11V3C11 2.44772 10.5523 2 10 2H4ZM1.5 3C1.5 1.61929 2.61929 0.5 4 0.5H10C11.3807 0.5 12.5 1.61929 12.5 3V11C12.5 12.3807 11.3807 13.5 10 13.5H4C2.61929 13.5 1.5 12.3807 1.5 11V3Z" fill="currentColor"/>
                      <path d="M5 4.75C5 4.33579 5.33579 4 5.75 4H8.25C8.66421 4 9 4.33579 9 4.75C9 5.16421 8.66421 5.5 8.25 5.5H5.75C5.33579 5.5 5 5.16421 5 4.75Z" fill="currentColor"/>
                      <path d="M5 7.25C5 6.83579 5.33579 6.5 5.75 6.5H8.25C8.66421 6.5 9 6.83579 9 7.25C9 7.66421 8.66421 8 8.25 8H5.75C5.33579 8 5 7.66421 5 7.25Z" fill="currentColor"/>
                      <path d="M5.75 9C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5H8.25C8.66421 10.5 9 10.1642 9 9.75C9 9.33579 8.66421 9 8.25 9H5.75Z" fill="currentColor"/>
                      <path d="M13.5 5V13C13.5 14.3807 12.3807 15.5 11 15.5H6V14H11C11.5523 14 12 13.5523 12 13V5H13.5Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
                <div className="px-4 py-2">
                  <MDXRenderer mdxPath={selectedPrompt.mdxPages[currentPageIndex]} />
                </div>
              </div>

              <div className="lg:w-1/5 flex flex-col gap-2">
                <div className="px-4 py-3 bg-white dark:bg-zinc-800 rounded-lg border-2 border-zinc-200 dark:border-zinc-700">
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Recommended AI</p>
                  <div className="flex items-center gap-2">
                    {selectedPrompt.recommendedAI.map((aiKey) => {
                      const agent = aiAgentMap[aiKey];
                      return (
                        <div key={aiKey} className="relative group">
                          <Image
                            src={agent.icon}
                            alt={agent.name}
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-zinc-200 dark:border-zinc-700"
                          />
                          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {agent.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {selectedPrompt?.tutorialUrl && (
                  <a
                    href={selectedPrompt.tutorialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-left bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3 border-2 border-zinc-200 dark:border-zinc-700"
                  >
                    <Image src="/icons/youtube.webp" alt="YouTube" width={20} height={20} className="flex-shrink-0" />
                    Tutorial
                  </a>
                )}
                {selectedPrompt?.repositoryUrl && (
                  <a
                    href={selectedPrompt.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-left bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3 border-2 border-zinc-200 dark:border-zinc-700"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"/>
                    </svg>
                    Repository
                  </a>
                )}
                <button
                  onClick={() => exportPrompt(selectedPrompt)}
                  disabled={isExporting}
                  className="px-4 py-3 text-left bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3 border-2 border-zinc-200 dark:border-zinc-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {exportStatus === "loading" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="animate-spin text-zinc-600 dark:text-zinc-300"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : exportStatus === "success" ? (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-green-500">
                      <path d="M6.5 11.5L3.5 8.5L4.91421 7.08579L6.5 8.67157L11.0858 4.08579L12.5 5.5L6.5 11.5Z" fill="currentColor" />
                    </svg>
                  ) : exportStatus === "error" ? (
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-red-500">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 1.33301L1.33301 14.6663H14.6663L8 1.33301ZM7.33301 6.66634H8.66634V10.6663H7.33301V6.66634ZM8.66634 12.6663H7.33301V11.333H8.66634V12.6663Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z" fill="currentColor"/>
                    </svg>
                  )}
                  <span>
                    {exportStatus === "loading"
                      ? "Exporting..."
                      : exportStatus === "success"
                      ? "Exported!"
                      : exportStatus === "error"
                      ? "Retry export"
                      : "Export"}
                  </span>
                </button>

                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPageIndex === 0}
                      className="p-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-2 border-zinc-200 dark:border-zinc-700"
                      title="Previous page"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {currentPageIndex + 1} / {selectedPrompt.mdxPages.length}
                    </span>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPageIndex === selectedPrompt.mdxPages.length - 1}
                      className="p-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-2 border-zinc-200 dark:border-zinc-700"
                      title="Next page"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="mt-3 flex gap-1 justify-center">
                    {selectedPrompt.mdxPages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPageIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentPageIndex
                            ? 'w-8 bg-zinc-900 dark:bg-zinc-100'
                            : 'w-1.5 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                        }`}
                        title={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
