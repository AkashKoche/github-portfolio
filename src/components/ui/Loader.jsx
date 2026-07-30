import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center aurora-bg">
      <motion.div
        className="p-8 glass-card rounded-3xl flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-400 rounded-full animate-spin" />
        <p className="text-slate-300 font-medium">Loading Portfolio...</p>
      </motion.div>
    </div>
  );
}
