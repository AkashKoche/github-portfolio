import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import GlassCard from '../ui/GlassCard';

const COLORS = ['#7C3AED', '#06B6D4', '#22D3EE', '#EC4899', '#8B5CF6'];

export default function LanguageChart({ repos }) {
  const langMap = {};
  repos.forEach(r => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const data = Object.entries(langMap).map(([name, value]) => ({ name, value }));
  
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
        <Legend />
      </PieChart>
    </GlassCard>
  );
}
