type AchievementCardProps = {
  image: string;
  title: string;
  description: string;
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group bg-yellow-500 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 p-5">
      <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
