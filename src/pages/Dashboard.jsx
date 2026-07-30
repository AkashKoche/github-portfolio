import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useGitHubUser } from '../hooks/useGitHubUser';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useGitHubEvents } from '../hooks/useGitHubEvents';
import AuroraBackground from '../components/ui/AuroraBackground';
import Loader from '../components/ui/Loader';
import ProfileCard from '../components/dashboard/ProfileCard';
import StatsGrid from '../components/dashboard/StatsGrid';
import RepoCard from '../components/dashboard/RepoCard';
import LanguageChart from '../components/dashboard/LanguageChart';
import ContributionHeatmap from '../components/dashboard/ContributionHeatmap';
import ActivityFeed from '../components/dashboard/ActivityFeed';

export default function Dashboard() {
  const { username } = useParams();
  const { user, loading, error } = useGitHubUser(username);
  const { repos } = useGitHubRepos(username);
  const { events } = useGitHubEvents(username);
  const [search, setSearch] = useState('');

  const filteredRepos = useMemo(() => {
    return repos.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(search.toLowerCase())));
  }, [repos, search]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-400 text-center py-20">Failed to load user.</div>;
  if (!user) return null;

  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground />
      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20 space-y-10">
        {/* Top row: Profile + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard user={user} />
          </div>
          <div className="lg:col-span-3">
            <StatsGrid user={user} repos={repos} />
          </div>
        </div>

        {/* Heatmap + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContributionHeatmap username={username} />
          </div>
          <div>
            <LanguageChart repos={repos} />
          </div>
        </div>

        {/* Search + Repository grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Repositories</h2>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
          </div>
        </div>

        {/* Activity Timeline */}
        <ActivityFeed events={events} />

        {/* Footer (inside dashboard) */}
        <footer className="mt-20 text-center text-slate-500 text-sm">
          Built with React • Vite • GitHub API • Framer Motion • Made with ❤️
        </footer>
      </main>
    </div>
  );
}
