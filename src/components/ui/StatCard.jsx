import { useEffect, useState } from 'react';
import GlassCard from './GlassCard';

export default function StatCard({ icon: Icon, label, value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <GlassCard className="p-4 flex flex-col items-center justify-center gap-2">
      {Icon && <Icon className="w-6 h-6 text-purple-400" />}
      <span className="text-3xl font-bold gradient-text">{count}+</span>
      <span className="text-sm text-slate-300">{label}</span>
    </GlassCard>
  );
}
