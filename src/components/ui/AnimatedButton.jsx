import { motion } from 'framer-motion';

export default function AnimatedButton({ children, href, ...props }) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white 
                 bg-gradient-to-r from-purple-600 to-cyan-400 shadow-lg shadow-purple-500/25
                 hover:scale-105 hover:shadow-purple-500/40 transition-all overflow-hidden"
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full hover:animate-shimmer" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}
