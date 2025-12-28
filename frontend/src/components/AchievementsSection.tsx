import { AchievementCard } from "./AchievementCard";

const achievements = [
  {
    image: "/achieve1.jpeg",
    title: "Empowering Local Talent: Supporting Our Youth Sports Teams",
    description:
      "Promoting teamwork and community spirit. Prasad Info Tech is thrilled to provide the official jerseys for our local youth team this season. Go team!",
  },

];

export const AchievementsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Achievements
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Milestones that reflect our commitment to innovation, excellence, and meaningful impact to society.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <AchievementCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
