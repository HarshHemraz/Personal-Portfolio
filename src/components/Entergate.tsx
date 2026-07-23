import { useState } from "react";

interface EnterGateProps {
  onEnter: () => void;
}

function EnterGate({ onEnter }: EnterGateProps) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    onEnter();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute w-[600px] h-[600px] rounded-full bg-red-500/10 blur-3xl" />

      <button
        onClick={handleEnter}
        className="group relative flex flex-col items-center gap-6 focus:outline-none"
      >
        <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
          Click  to enter
        </span>

        <span className="relative flex items-center justify-center w-24 h-24">
          <span className="absolute inset-0 rounded-full border border-red-500/30 gate-pulse" />
<span className="absolute inset-0 rounded-full border border-red-500/15 scale-125" />
          <span className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M2 2 L18 11 L2 20 Z" fill="white" />
            </svg>
          </span>
        </span>

    
      </button>

      <style>{`
        @keyframes gatePulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .gate-pulse {
          animation: gatePulse 2.4s ease-out infinite;
        }
      `}</style>
    </div>
  );
}

export default EnterGate;