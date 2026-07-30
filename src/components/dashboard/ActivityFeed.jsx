import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, AlertCircle, Plus } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const iconMap = {
  PushEvent: GitCommit,
  PullRequestEvent: GitPullRequest,
  WatchEvent: Star,
  IssuesEvent: AlertCircle,
  CreateEvent: Plus,
};

export default function ActivityFeed({ events }) {
  const recent = events.slice(0, 10);
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
      <div className="relative ml-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent" />
        <ul className="space-y-6">
          {recent.map((event, index) => {
            const Icon = iconMap[event.type] || GitCommit;
            return (
              <motion.li
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 -translate-x-1/2 bg-slate-900 p-1 rounded-full border border-white/10">
                  <Icon size={14} className="text-purple-400" />
                </span>
                <p className="text-sm text-white font-medium">{event.repo.name}</p>
                <p className="text-xs text-slate-400">
                  {event.type.replace('Event', '')} • {new Date(event.created_at).toLocaleString()}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </GlassCard>
  );
}
