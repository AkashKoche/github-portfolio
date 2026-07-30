import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) navigate(`/dashboard/${username.trim()}`);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero already has aurora background */}
      <Hero />
      <div id="dashboard" className="flex items-center justify-center pb-32 px-4">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 w-full max-w-md text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Explore a GitHub Profile</h2>
          <p className="text-slate-400 mb-6">Enter any username to see their portfolio.</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. torvalds"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white px-4 py-3 rounded-xl hover:scale-105 transition flex items-center gap-1"
            >
              Go <ArrowRight size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
