import { useEffect, useRef } from 'react';

const MarqueeRow = ({ items, speed = 30, direction = 'left' }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let isPaused = false;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (!isPaused) {
        const distance = speed * (elapsed / 1000);
        if (direction === 'left') {
          el.scrollLeft += distance;
          if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
            el.scrollLeft = 0;
          }
        } else {
          el.scrollLeft -= distance;
          if (el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollWidth - el.clientWidth;
          }
        }
      }

      start = timestamp;
      requestAnimationFrame(step);
    };

    const handleTouch = () => (isPaused = true);
    const handleRelease = () => (isPaused = false);

    el.addEventListener('touchstart', handleTouch);
    el.addEventListener('touchend', handleRelease);

    const animationId = requestAnimationFrame(step);

    return () => {
      el.removeEventListener('touchstart', handleTouch);
      el.removeEventListener('touchend', handleRelease);
      cancelAnimationFrame(animationId);
    };
  }, [speed, direction]);

  return (
    <div
      ref={rowRef}
      className="flex overflow-x-auto gap-4 px-1 py-2 no-scrollbar"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {items.map((item, index) => {
        const isAmenity = item.type === 'amenity';
        const classes = isAmenity
          ? 'bg-gray-50 border border-gray-100 text-gray-700'
          : 'bg-[#f1e3e7] border border-red-100 text-[#631930]';

        return (
          <div
            key={index}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm whitespace-nowrap ${classes}`}
          >
            {item.data.icon}
            <span>{item.data.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MarqueeRow;
