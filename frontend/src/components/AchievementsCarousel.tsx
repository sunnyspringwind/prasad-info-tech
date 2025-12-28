import { useState } from "react";

export type Achievement = {
  image: string;
  title: string;
  description: string;
};

type AchievementsCarouselProps = {
  items: Achievement[];
};

export const AchievementsCarousel: React.FC<AchievementsCarouselProps> = ({
  items,
}) => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % items.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Achievements
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Highlights from our journey of growth, innovation, and excellence.
          </p>
        </header>

        <div className="relative">
          {/* Slider Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm w-10 h-10 grid place-items-center hover:shadow-md hover:bg-gray-50 transition"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm w-10 h-10 grid place-items-center hover:shadow-md hover:bg-gray-50 transition"
          >
            ▶
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === i
                    ? "bg-gray-900 w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
