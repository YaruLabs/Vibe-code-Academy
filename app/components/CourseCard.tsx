import Image from "next/image";
import { Course } from "../types/course";

type CourseCardProps = Omit<Course, "id">;

export default function CourseCard({ image, title, description }: CourseCardProps) {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-[50vh] min-h-[300px] max-h-[600px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/90 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
