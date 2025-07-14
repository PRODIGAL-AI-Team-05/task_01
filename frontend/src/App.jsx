import React from "react";
import InteractionTracker from "./components/InteractionTracker";
import { MousePointerClick, Move, Sparkles, ArrowRightCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      <InteractionTracker />
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-pulse tracking-tight">
          🔥 Heatmap Analytics Tool
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Track user behavior with precision. Discover what your users interact with the most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 md:px-0">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <MousePointerClick className="text-green-400 w-10 h-10 mb-3 animate-bounce" />
          <h3 className="text-xl font-bold text-white mb-2">Click Tracking</h3>
          <p className="text-gray-300 text-sm">
            Monitors every user click on your site with timestamp and location.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <Move className="text-yellow-400 w-10 h-10 mb-3 animate-pulse" />
          <h3 className="text-xl font-bold text-white mb-2">Mouse Movement</h3>
          <p className="text-gray-300 text-sm">
            Records user mouse flow to detect high attention areas and patterns.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <Sparkles className="text-purple-400 w-10 h-10 mb-3 animate-spin-slow" />
          <h3 className="text-xl font-bold text-white mb-2">AI Insights</h3>
          <p className="text-gray-300 text-sm">
            Analyze interaction data using smart clustering and engagement scoring.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-500 hover:to-pink-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
          <ArrowRightCircle className="w-5 h-5" />
          View Dashboard
        </button>
      </div>

      <p className="mt-10 text-xs text-gray-500 text-center">
         Built using React and Tailwind | Project ProdigalAi
      </p>
    </div>
  );
}

export default App;
