import { motion, AnimatePresence } from 'framer-motion';

const eventIcons = {
  PushEvent: '🚀',
  WatchEvent: '⭐',
  ForkEvent: '🍴',
  IssuesEvent: '🐛',
  PullRequestEvent: '🔀',
  CreateEvent: '➕',
  DeleteEvent: '🗑️',
  default: '📌',
};

export default function ActivityFeed({ events }) {
  const recent = events.slice(0, 15);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        🔴 Live Activity
      </h3>
      <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
        <AnimatePresence>
          {recent.map((event) => (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"
            >
              <span className="text-xl">{eventIcons[event.type] || eventIcons.default}</span>
              <div className="text-sm">
                <span className="font-medium text-gray-900 dark:text-white">
                  {event.repo.name}
                </span>
                <p className="text-gray-500 dark:text-gray-400">
                  {event.type.replace('Event', '')}
                  {event.payload?.commits && ` - ${event.payload.commits.length} commit(s)`}
                </p>
                <span className="text-xs text-gray-400">
                  {new Date(event.created_at).toLocaleString()}
                </span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
