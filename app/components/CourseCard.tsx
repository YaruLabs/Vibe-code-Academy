"use client"

import Image from "next/image";
import { Course } from "../types/course";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CourseCardProps = Omit<Course, "id">;

export default function CourseCard({ image, title, description, prompts }: CourseCardProps) {
  return (
    <Dialog>
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
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1200px] h-[90vh] overflow-y-auto flex flex-col p-6 gap-0">
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
      </DialogContent>
    </Dialog>
  );
}
