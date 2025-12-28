import { AchievementsCarousel } from "./AchievementsCarousel";

const achievements = [
  {
    image: "/achieve1.webp",
    title: "Empowering Local Talent: Supporting Our Youth Sports Teams",
    description:
      "Promoting teamwork and community spirit. Prasad Info Tech is thrilled to provide the official jerseys for our local youth team this season. Go team!",
  },
   {
    image: "/achieve2.webp",
    title: "Empowering Local Talent: Supporting Our Youth Sports Teams",
    description:
      "Promoting teamwork and community spirit. Prasad Info Tech is thrilled to provide the official jerseys for our local youth team this season. Go team!",
  },

];

export default function AchievementSection2() {
  return <AchievementsCarousel items={achievements} />;
}
