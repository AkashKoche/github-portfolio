import { Star, GitFork, Circle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function RepoCard({ repo }) {
  return (
    <GlassCard className="p-5 flex flex-col justify-between h-full">
      <div>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:text-purple-400 transition line-clamp-1">
          {repo.name}
        </a>
        <p className="text-sm text-slate-400 mt-2 line-clamp-2">{repo.description || 'No description'}</p>
      </div>
      <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
              <Circle size={8} fill="#22D3EE" stroke="none" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
          <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
        </div>
        <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </GlassCard>
  );
}
