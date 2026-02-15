import React, { useEffect, useRef, useState } from 'react';
import './StatsStrip.css';

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 50, suffix: '+', label: 'Expert Mentors' },
  { value: 4.9, suffix: '/5', label: 'Parent Rating', decimals: 1 },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
];

function AnimatedNumber({ target, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref} className="stat-number">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Key statistics">
      <div className="stats-strip-inner">
        {stats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <AnimatedNumber target={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsStrip;
