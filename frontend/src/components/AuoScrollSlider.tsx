import './../custom.css'; // we'll define keyframes here

const AutoScrollSlider = ({ imageUrls, speed = 20 }: { imageUrls: string[]; speed?: number }) => {
  const duration = `${speed}s`;

  return (
    <div className="overflow-hidden w-full border border-gray-200 shadow-md rounded-lg">
      <div
        className="flex whitespace-nowrap animate-scroll"
        style={{ animationDuration: duration }}
      >
        {/* Repeat twice for seamless loop */}
        {[...imageUrls, ...imageUrls].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`slider-img-${index}`}
            className="h-48 w-auto object-cover mx-2 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollSlider;
