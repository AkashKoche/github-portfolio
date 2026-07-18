import { motion } from 'framer-motion';

export default function RepoCard({ repo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors"
    >
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        {repo.name}
      </a>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm line-clamp-3">
        {repo.description || 'No description'}
      </p>
      <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </motion.div>
  );
}
