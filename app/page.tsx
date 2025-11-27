import CourseCard from "./components/CourseCard";
import HeroSection from "./components/HeroSection";
import { courses } from "./constants/courses";

export default function Home() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-950 p-2 sm:p-4">
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-2 sm:gap-4">
        <HeroSection />

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
            prompts={course.prompts}
          />
        ))}
      </div>
    </div>
  );
}
