export default function ProfileCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-colors">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full border-4 border-indigo-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
        {user.name || user.login}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>
      {user.bio && <p className="mt-2 text-gray-600 dark:text-gray-300">{user.bio}</p>}
      <div className="flex gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
        <span>👥 {user.followers} followers</span>
        <span>📦 {user.public_repos} repos</span>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        View on GitHub
      </a>
    </div>
  );
}
