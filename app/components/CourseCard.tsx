"use client"

import { useState } from "react";
import Image from "next/image";
import { Course, Prompt } from "../types/course";
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
                <pre className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-mono bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg">
                  {selectedPrompt.content}
                </pre>
              </div>

              <div className="lg:w-1/5 flex flex-col gap-2">
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium">
                  Tutorial
                </button>
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium">
                  Repositorio
                </button>
                <button className="px-4 py-3 text-left bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-900 dark:text-white font-medium">
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
