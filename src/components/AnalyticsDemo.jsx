import React, { useState } from 'react';
import { BarChart3, Calculator, Database, Play, Sparkles, Sliders } from 'lucide-react';

const datasetSamples = [
  { groupA: 12.4, groupB: 15.2, groupC: 18.1 },
  { groupA: 14.1, groupB: 16.8, groupC: 19.4 },
  { groupA: 11.8, groupB: 14.9, groupC: 17.6 },
  { groupA: 13.5, groupB: 17.1, groupC: 20.2 },
  { groupA: 15.0, groupB: 16.0, groupC: 18.9 }
];

export default function AnalyticsDemo() {
  const [data, setData] = useState(datasetSamples);
  const [metric, setMetric] = useState("Two-Way ANOVA");
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState({
    fStatistic: "18.42",
    pValue: "0.0003",
    df1: 2,
    df2: 12,
    significance: "Statistically Significant (p < 0.05)"
  });

  const runModel = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const randomF = (15 + Math.random() * 8).toFixed(2);
      const randomP = (0.0001 + Math.random() * 0.0008).toFixed(4);
      setResults({
        fStatistic: randomF,
        pValue: randomP,
        df1: metric === "Two-Way ANOVA" ? 2 : 1,
        df2: metric === "Two-Way ANOVA" ? 12 : 14,
        significance: "Statistically Significant (p < 0.05)"
      });
      setIsCalculating(false);
    }, 800);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 max-w-5xl mx-auto my-2 text-white shadow-2xl font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-cyan-400 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cyan-400" /> StatsEngine Quantitative Analytics
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Live PoC Demo — Automated hypothesis testing, variance breakdown, and parametric statistics
          </p>
        </div>

        <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-slate-300">Dataset: N = 15 Samples</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Model Parameters */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
          <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider block flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Model Configuration
          </span>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1.5">Statistical Test</label>
            <select
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-cyan-400 focus:outline-none focus:border-cyan-500"
            >
              <option value="Two-Way ANOVA">Two-Way ANOVA (Factorial)</option>
              <option value="One-Way ANOVA">One-Way ANOVA</option>
              <option value="Linear Regression">Ordinary Least Squares (OLS)</option>
            </select>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-3 text-[11px] font-mono text-slate-400 space-y-1.5">
            <div className="flex justify-between">
              <span>Alpha Level (&alpha;):</span>
              <span className="text-slate-200">0.05</span>
            </div>
            <div className="flex justify-between">
              <span>Confidence Int:</span>
              <span className="text-slate-200">95.0%</span>
            </div>
            <div className="flex justify-between">
              <span>Distribution:</span>
              <span className="text-cyan-400">F-Distribution</span>
            </div>
          </div><button
            onClick={runModel}
            disabled={isCalculating}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >
            {isCalculating ? (
              <>Computing Metrics...</>
            ) : (
              <><Play className="w-3.5 h-3.5 fill-current" /> Execute Computation</>
            )}
          </button>
        </div>

        {/* Middle & Right Column: Computed Outputs */}
        <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-cyan-400" /> Statistical Output Table
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Model: {metric}
              </span>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
                <span className="text-[10px] font-mono text-slate-500 block">F-Statistic</span>
                <span className="text-base font-bold font-mono text-cyan-400">{results.fStatistic}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
                <span className="text-[10px] font-mono text-slate-500 block">p-Value</span>
                <span className="text-base font-bold font-mono text-emerald-400">{results.pValue}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
                <span className="text-[10px] font-mono text-slate-500 block">df (Between)</span>
                <span className="text-base font-bold font-mono text-slate-200">{results.df1}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
                <span className="text-[10px] font-mono text-slate-500 block">df (Within)</span>
                <span className="text-base font-bold font-mono text-slate-200">{results.df2}</span>
              </div>
            </div>

            {/* Visual Mean Bars */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-4 space-y-3">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Group Variance Averages</span>
              
              <div className="space-y-2 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Control Group A</span>
                    <span className="text-cyan-400">13.36 avg</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Treatment Group B</span>
                    <span className="text-cyan-400">16.00 avg</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div><div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Treatment Group C</span>
                    <span className="text-cyan-400">18.84 avg</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-xs font-mono text-emerald-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Conclusion: {results.significance}</span>
          </div>
        </div>

      </div>

    </div>
  );
}