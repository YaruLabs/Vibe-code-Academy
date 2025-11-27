import CourseCard from "./components/CourseCard";
import HeroSection from "./components/HeroSection";
import { courses } from "./constants/courses";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <HeroSection />

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
