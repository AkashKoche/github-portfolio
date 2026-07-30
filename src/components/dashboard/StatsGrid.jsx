import { GitFork, Star, Users, GitCommit } from 'lucide-react';
import StatCard from '../ui/StatCard';
import GlassCard from '../ui/GlassCard';

export default function StatsGrid({ user, repos }) {
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard icon={GitFork} label="Repositories" value={user.public_repos} />
      <StatCard icon={Users} label="Followers" value={user.followers} />
      <StatCard icon={Star} label="Stars" value={totalStars} />
      <StatCard icon={GitCommit} label="Forks" value={totalForks} />
    </div>
  );
}
