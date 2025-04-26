import { useEffect, useRef } from 'react';

const MarqueeRow = ({ items, speed = 30 }) => {
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
        el.scrollLeft += speed * (elapsed / 1000);
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
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
  }, [speed]);

  return (
    <div
      ref={rowRef}
      className="flex overflow-x-auto gap-4 px-1 py-2 scrollbar-none"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {items.map((item, index) => {
        const isAmenity = item.type === 'amenity';
        const classes = isAmenity
          ? 'bg-gray-50 border border-gray-200 text-gray-700'
          : 'bg-yellow-50 border border-yellow-100 text-yellow-800';

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
