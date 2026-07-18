import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useGitHubUser } from '../hooks/useGitHubUser';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { useGitHubEvents } from '../hooks/useGitHubEvents';
import ProfileCard from '../components/ProfileCard';
import RepoCard from '../components/RepoCard';
import ActivityFeed from '../components/ActivityFeed';
import ContributionHeatmap from '../components/ContributionHeatmap';
import LanguageChart from '../components/LanguageChart';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { username } = useParams();
  const { user, loading: userLoading, error: userError } = useGitHubUser(username);
  const { repos, loading: reposLoading } = useGitHubRepos(username);
  const { events } = useGitHubEvents(username);

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('updated');

  const filteredRepos = useMemo(() => {
    let result = repos.filter(
      (r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(search.toLowerCase()))
    );
    if (sortBy === 'stars') result.sort((a, b) => b.stargazers_count - a.stargazers_count);
    else if (sortBy === 'forks') result.sort((a, b) => b.forks_count - a.forks_count);
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    else result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return result;
  }, [repos, search, sortBy]);

  if (userLoading || reposLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="text-center py-20 text-red-500 dark:text-red-400">
        User not found or API rate limit exceeded.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {user && <ProfileCard user={user} />}
          <ActivityFeed events={events} />
        </aside>

        {/* Main content */}
        <main className="lg:col-span-3 space-y-6">
          <ContributionHeatmap username={username} />
          <LanguageChart repos={repos} />

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forks</option>
              <option value="name">Name</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>

          {filteredRepos.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-10">
              No repositories match your search.
            </p>
          )}
        </main>
      </motion.div>
    </div>
  );
}
