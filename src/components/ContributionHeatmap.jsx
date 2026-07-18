export default function ContributionHeatmap({ username }) {
  const src = `https://ghchart.rshah.org/${username}?color=40916c&backgroundColor=transparent`;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-colors overflow-hidden">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        📅 Contribution Graph
      </h3>
      <img
        src={src}
        alt={`${username}'s contribution graph`}
        className="w-full dark:invert dark:hue-rotate-180"
        style={{ filter: 'invert(0)' }}
      />
    </div>
  );
}
