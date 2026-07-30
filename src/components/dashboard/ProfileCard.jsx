import { MapPin, Building, Link, Users } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function ProfileCard({ user }) {
  return (
    <GlassCard className="p-6 flex flex-col items-center text-center">
      <div className="relative">
        <img 
          src={user.avatar_url} 
          alt={user.login}
          className="w-24 h-24 rounded-full ring-2 ring-purple-500/50 object-cover" 
        />
        <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-black" />
      </div>
      
      <h2 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
        {user.name || user.login}
      </h2>
      
      <p className="text-slate-400 text-sm">@{user.login}</p>
      
      {user.bio && (
        <p className="text-sm mt-2 text-slate-300">{user.bio}</p>
      )}

      <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-slate-400">
        {user.location && (
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {user.location}
          </span>
        )}
        {user.company && (
          <span className="flex items-center gap-1">
            <Building size={12} /> {user.company}
          </span>
        )}
        {user.blog && (
          <a 
            href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-purple-400 transition-colors"
          >
            <Link size={12} /> {user.blog}
          </a>
        )}
      </div>

      <div className="flex gap-4 mt-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Users size={14} /> {user.followers} followers
        </span>
        <span className="flex items-center gap-1">
          {user.following} following
        </span>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        View on GitHub
      </a>
    </GlassCard>
  );
}
