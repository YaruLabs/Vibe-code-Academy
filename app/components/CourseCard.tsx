"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

type CourseCardProps = Omit<Course, "id">;

const categoryColors = {
  blockchain: "bg-blue-500",
  games: "bg-pink-500",
  software: "bg-orange-500",
};

export default function CourseCard({ image, title, description, prompts, category }: CourseCardProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedPrompt(null);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
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
                    onClick={() => setSelectedPrompt(prompt)}
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
        ) : (
          <div className="flex flex-col h-full p-6 pt-8">
            <div className="mb-6">
              <button
                onClick={() => setSelectedPrompt(null)}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 hover:bg-gray-50 rounded-2xl p-2"
              >
                <span>←</span> Back
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
              <div className="lg:w-4/5 overflow-y-auto pr-4">
                <MDXRenderer mdxPath={selectedPrompt.mdxPath} />
              </div>

              <div className="lg:w-1/5 flex flex-col gap-2">
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3">
                  <Image src="/icons/youtube.webp" alt="YouTube" width={20} height={20} className="flex-shrink-0" />
                  Tutorial
                </button>
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"/>
                  </svg>
                  Repositorio
                </button>
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z" fill="currentColor"/>
                  </svg>
                  Export
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
