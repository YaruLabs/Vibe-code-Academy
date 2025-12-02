import CourseCard from "./components/CourseCard";
import HeroSection from "./components/HeroSection";
import { courses } from "./constants/courses";

export default function Home() {
  return (
    <div className="min-h-screen h-screen bg-zinc-50 dark:bg-zinc-950 p-2 sm:p-3 md:p-4 lg:p-6">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <HeroSection />

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
            prompts={course.prompts}
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
}
