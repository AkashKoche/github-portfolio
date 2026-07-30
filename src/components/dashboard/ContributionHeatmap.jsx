import GlassCard from '../ui/GlassCard';

export default function ContributionHeatmap({ username }) {
  return (
    <GlassCard className="p-6 overflow-hidden">
      <h3 className="text-xl font-semibold text-white mb-4">Contribution Graph</h3>
      <img
        src={`https://ghchart.rshah.org/${username}?color=7C3AED&backgroundColor=transparent`}
        alt="contributions"
        className="w-full dark:invert-0"
      />
    </GlassCard>
  );
}
