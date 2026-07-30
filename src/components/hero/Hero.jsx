import { ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Aurora background is already applied at root level */}
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Hello! My Self Akash Koche <span className="inline-block animate-wave">👋</span>
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          "I Created Beautiful Looking GitHub Profiler"
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Explore live GitHub profiles, repositories, contributions, and more – all in one premium dashboard.
        </p>
        <div className="flex justify-center">
          <AnimatedButton href="#dashboard">
            Explore Dashboard <ArrowRight size={18} />
          </AnimatedButton>
        </div>
      </div>
      {/* Decorative 3D illustration placeholder */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-600/30 to-cyan-400/30 rounded-full blur-3xl -z-10" />
    </section>
  );
}
