import { useEffect, useState } from "react";
import { Globe, Cpu, Sparkles } from "lucide-react";

export function HeroIllustration() {
  const [barHeights, setBarHeights] = useState([45, 60, 40, 75, 50, 85, 58, 92, 68, 88, 70, 82]);

  // Periodic subtle updates to the bar heights to make the dashboard look alive
  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights(prev =>
        prev.map(h => {
          const change = Math.floor(Math.random() * 15) - 7; // -7 to +7
          return Math.max(15, Math.min(100, h + change));
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[5/4] select-none">
      {/* Background radial glowing blobs */}
      <div className="absolute top-[20%] left-[25%] w-[45%] aspect-square bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-[45%] aspect-square bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Floating Globe Badge */}
      <div 
        className="absolute top-[12%] left-[10%] w-[13%] aspect-square max-w-14 max-h-14 min-w-10 rounded-2xl bg-slate-900/95 border border-slate-800/80 flex items-center justify-center text-blue-400 shadow-xl shadow-slate-950/20 hover:scale-110 hover:border-blue-500/80 transition-all duration-300 cursor-pointer"
        style={{
          animation: "float-slow 6s ease-in-out infinite",
        }}
      >
        <Globe className="h-[50%] w-[50%] animate-[spin_20s_linear_infinite]" />
      </div>

      {/* 2. Dashboard Card */}
      <div 
        className="absolute top-[8%] right-[8%] w-[54%] rounded-2xl bg-slate-900/95 border border-slate-800/80 p-[4%] shadow-2xl shadow-slate-950/30 hover:border-slate-700/80 transition-all duration-300"
        style={{
          animation: "float-slow 7s ease-in-out infinite",
          animationDelay: "0.8s"
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs text-slate-400 font-medium">Dashboard</span>
          <div className="flex gap-1.5 items-center">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
          </div>
        </div>

        <div className="mt-2">
          <div className="text-xl md:text-3xl font-display font-bold text-white tracking-tight">$48,290</div>
          <div className="text-[10px] md:text-xs text-blue-400 font-semibold mt-0.5 flex items-center gap-1">
            <span>+18.2% this month</span>
          </div>
        </div>

        {/* Live Bar Chart */}
        <div className="flex items-end justify-between gap-[3%] mt-4 h-16 md:h-24">
          {barHeights.map((height, i) => (
            <div 
              key={i} 
              className="w-full bg-blue-600/90 rounded-t-md hover:bg-blue-400 transition-all duration-500 origin-bottom cursor-pointer shadow-[0_0_12px_rgba(37,99,235,0.2)]" 
              style={{ height: `${height}%` }}
              title={`Metric ${i + 1}: ${Math.round(height)}`}
            />
          ))}
        </div>
      </div>

      {/* 3. AI Assistant Card */}
      <div 
        className="absolute bottom-[24%] left-[8%] w-[56%] rounded-2xl bg-slate-900/95 border border-slate-800/80 p-[4%] shadow-2xl shadow-slate-950/30 hover:border-slate-700/80 transition-all duration-300"
        style={{
          animation: "float-slow 8s ease-in-out infinite",
          animationDelay: "1.6s"
        }}
      >
        <div className="flex items-center gap-2 border-b border-slate-800/60 pb-2">
          <div className="h-7 w-7 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white leading-none">AI Assistant</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[9px] text-slate-400">Online</span>
            </div>
          </div>
        </div>

        {/* Prompt Bubble */}
        <div className="mt-3 bg-slate-800/50 text-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2 text-[10px] md:text-xs border border-slate-700/30 max-w-[90%] font-medium">
          How can I optimize conversions?
        </div>

        {/* Response Bubble */}
        <div className="mt-2.5 bg-blue-600 text-white rounded-2xl rounded-tr-none px-3.5 py-2 text-[10px] md:text-xs max-w-[90%] ml-auto font-medium shadow-md shadow-blue-900/30 border border-blue-500/20">
          Analyzing your funnel now...
        </div>

        {/* Floating CPU Badge */}
        <div 
          className="absolute -bottom-4 left-[20%] w-[14%] aspect-square max-w-10 max-h-10 rounded-xl bg-slate-900/95 border border-slate-800/80 flex items-center justify-center text-blue-400 shadow-xl shadow-slate-950/20 hover:scale-110 hover:border-blue-500/80 transition-all duration-300 cursor-pointer"
          style={{
            animation: "float-slow 5s ease-in-out infinite",
            animationDelay: "0.4s"
          }}
        >
          <Cpu className="h-[55%] w-[55%] animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* 4. Code Editor Card */}
      <div 
        className="absolute bottom-[8%] right-[8%] w-[54%] rounded-2xl bg-slate-950/95 border border-slate-900/90 p-[4%] shadow-2xl shadow-slate-950/40 hover:border-slate-800 transition-all duration-300"
        style={{
          animation: "float-slow 7s ease-in-out infinite",
          animationDelay: "2.4s"
        }}
      >
        {/* Editor window controls */}
        <div className="flex gap-1.5 items-center border-b border-slate-900 pb-2">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="text-[9px] text-slate-500 font-mono ml-2">app.js</span>
        </div>

        {/* Code Content */}
        <div className="mt-2.5 overflow-x-auto">
          <pre className="font-mono text-[9px] md:text-xs leading-relaxed text-slate-400">
            <code>
              <span className="text-blue-400">const</span> app = <span className="text-violet-400">createApp</span>(&#123;{"\n"}
              {"  "}name: <span className="text-emerald-400">'spidermen'</span>,{"\n"}
              {"  "}ai: <span className="text-blue-400">true</span>,{"\n"}
              &#125;);
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
