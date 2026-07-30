import { useEffect, useRef } from 'react';
import './FloatingBlobs.css'; // optional for moving blobs

export default function AuroraBackground() {
  return (
    <>
      <div className="fixed inset-0 aurora-bg z-[-2]" />
      <div className="noise-overlay z-[-1]" />
      {/* Optional floating gradient blobs */}
      <FloatingBlobs />
    </>
  );
}

// Simple floating blobs (only a few to avoid lag)
function FloatingBlobs() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-screen filter blur-3xl animate-float-slow delay-1000" />
    </div>
  );
}
