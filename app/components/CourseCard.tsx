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

export default function CourseCard({ image, title, description }: CourseCardProps) {
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
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1200px] h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl">{title}</DialogTitle>
          <DialogDescription className="text-lg sm:text-xl pt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Descubre más sobre este curso y comienza tu viaje de aprendizaje.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
